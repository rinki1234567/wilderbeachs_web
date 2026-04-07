
// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Calendar, Users, Shield, Loader2, Minus, Plus, CheckCircle2, Sparkles, Mail, Phone, User } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { fetchRoomTypes, checkRoomAvailability, createBooking, type RoomType } from "@/lib/frappe-api"
// import { useToast } from "@/hooks/use-toast"
// import { useSearchParams } from "next/navigation"

// interface SelectedRoom {
//   category: string;
//   price: number;
//   rooms: number;
//   adults: number;
//   children: number;
// }

// export default function BookingForm({ onSummaryUpdate }: { onSummaryUpdate: (data: any) => void }) {
//   const { toast } = useToast()
//   const [roomTypes, setRoomTypes] = useState<RoomType[]>([])
//   const [loading, setLoading] = useState(true)
//   const [submitting, setSubmitting] = useState(false)
//   const [checkingData, setCheckingData] = useState(false)

//   // Dynamic States from Backend
//   const [categoryPrices, setCategoryPrices] = useState<Record<string, number>>({})
//   const [availabilityMap, setAvailabilityMap] = useState<Record<string, number>>({})
//   const [offers, setOffers] = useState<Record<string, boolean>>({})
//   const [maxGuestMap, setMaxGuestMap] = useState<Record<string, number>>({});
//   // Form States
//   const [checkIn, setCheckIn] = useState("")
//   const [checkOut, setCheckOut] = useState("")
//   const [selectedRoomType, setSelectedRoomType] = useState("")
//   const [selectedRooms, setSelectedRooms] = useState<SelectedRoom[]>([])

//   // Guest Details
//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [email, setEmail] = useState("")
//   const [phone, setPhone] = useState("")
//   const [agreeTerms, setAgreeTerms] = useState(false)

//   const searchParams = useSearchParams()
//   const roomFromUrl = searchParams.get("room")
//   const today = new Date().toISOString().split("T")[0]

//   useEffect(() => {
//     fetchRoomTypes()
//       .then(setRoomTypes)
//       .catch(() => toast({ title: "Failed to load rooms", variant: "destructive" }))
//       .finally(() => setLoading(false))
//     if (roomFromUrl) setSelectedRoomType(roomFromUrl)
//   }, [roomFromUrl, toast])

 
//   useEffect(() => {
   

//     const scanCategories = async () => {
//        if (!selectedRoomType || !checkIn || !checkOut) return;
//       setCheckingData(true);
//       const room = roomTypes.find(r => r.name === selectedRoomType);
//       if (!room?.tariffs) return;

//       const newPrices: Record<string, number> = {};
//       const newAvail: Record<string, number> = {};
//       const newOffers: Record<string, boolean> = {};
//       const newMaxGuests: Record<string, number> = {};

//       await Promise.all(room.tariffs.map(async (tariff: any) => {
//         console.log("Full Tariff Object:", tariff); // <-- Ye check karein
//     console.log(`Category: ${tariff.category}, Max Guest: ${tariff.max_guest}`);
//         try {
//           const res = await fetch(`${process.env.NEXT_PUBLIC_FRAPPE_SITE_URL}/api/method/hotel_booking.api.booking.get_room_price?room_type=${encodeURIComponent(selectedRoomType)}&check_in=${checkIn}&check_out=${checkOut}&category=${encodeURIComponent(tariff.category)}`);
//           const data = await res.json();
          
          
//           if (data.message) {
//           newPrices[tariff.category] = data.message.price;
//           newOffers[tariff.category] = data.message.is_seasonal; // Backend se aayega true/false
//           newMaxGuests[tariff.category] = tariff.max_guest || 2;
//         }

//           const avail = await checkRoomAvailability(selectedRoomType, checkIn, checkOut, tariff.category);
//           newAvail[tariff.category] = typeof avail === 'number' ? avail : 0;
//         } catch {
//           newPrices[tariff.category] = tariff.price;
//          newOffers[tariff.category] = false;
//          newMaxGuests[tariff.category] = tariff.max_guest || 2;
//         }
//       }));

//       setCategoryPrices(newPrices);
//       setAvailabilityMap(newAvail);
//       setOffers(newOffers);
//       setCheckingData(false);
//       setMaxGuestMap(newMaxGuests);
//     };

//     scanCategories();
//   }, [selectedRoomType, checkIn, checkOut, roomTypes]);

  
//   const updateRoomDetail = (category: string, field: keyof SelectedRoom, change: number) => {
//   setSelectedRooms(prev => prev.map(item => {
//     if (item.category === category) {
//       const currentVal = item[field] as number;
//       let newVal = currentVal + change;
      
//       const maxRooms = availabilityMap[category] || 1;
//       const maxLimitPerRoom = maxGuestMap[category] || 2; // Child table capacity

//       if (field === 'rooms') {
//         newVal = Math.max(1, Math.min(maxRooms, newVal));
//       } else {
//         // Validation: Adults + Children
//         const adultsCount = field === 'adults' ? newVal : item.adults;
//         const childrenCount = field === 'children' ? newVal : item.children;
//         const totalGuests = adultsCount + childrenCount;
//         const totalCapacity = item.rooms * maxLimitPerRoom;

//         // Agar user limit cross kar raha hai toh toast dikhao aur update mat karo
//         if (change > 0 && totalGuests > totalCapacity) {
//           toast({
//             title: "Capacity Exceeded",
//             description: `${category} allows max ${maxLimitPerRoom} guests per room. Total capacity for ${item.rooms} room(s) is ${totalCapacity}.`,
//             variant: "destructive"
//           });
//           return item; 
//         }

//         // Min limit check
//         newVal = field === 'adults' ? Math.max(1, newVal) : Math.max(0, newVal);
//       }

//       return { ...item, [field]: newVal };
//     }
//     return item;
//   }));
// }
//   // Sync with Summary
//   useEffect(() => {
//     if (onSummaryUpdate && selectedRoomType && checkIn && checkOut && selectedRooms.length > 0) {
//       const room = roomTypes.find((r) => r.name === selectedRoomType)
//       const nights = Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) || 0

//       const totalRooms = selectedRooms.reduce((acc, r) => acc + r.rooms, 0)
//       const totalAmount = selectedRooms.reduce((acc, r) => acc + ( (categoryPrices[r.category] || r.price) * r.rooms * nights), 0)

//       onSummaryUpdate({
//         roomTypeName: room?.room_type_name || selectedRoomType,
//         roomImage: room?.image,
//         checkIn, checkOut, nights,
//         adults: selectedRooms.reduce((acc, r) => acc + r.adults, 0),
//         children: selectedRooms.reduce((acc, r) => acc + r.children, 0),
//         roomsRequired: totalRooms,
//         pricePerNight: totalAmount / (nights || 1) / (totalRooms || 1),
//         category: selectedRooms.map(r => `${r.category} (${r.rooms}R)`).join(", "),
//         totalAmount: totalAmount,
//       })
//     }
//   }, [selectedRooms, checkIn, checkOut, selectedRoomType, roomTypes, categoryPrices, onSummaryUpdate])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!agreeTerms || selectedRooms.length === 0) return toast({ title: "Error", description: "Select a room and agree to terms", variant: "destructive" });

//     setSubmitting(true)
//     try {
//       const result = await createBooking({
//         guest_name: `${firstName} ${lastName}`.trim(),
//         phone, email,
//         room_type: selectedRoomType,
//         check_in: checkIn,
//         check_out: checkOut,
//         rooms_required: selectedRooms.reduce((acc, r) => acc + r.rooms, 0),
//         adults: selectedRooms.reduce((acc, r) => acc + r.adults, 0),
//         children: selectedRooms.reduce((acc, r) => acc + r.children, 0),
//         category: JSON.stringify(selectedRooms),
//       })
//       window.location.href = `/booking/success?booking_id=${result.booking_id}`
//     } catch (err: any) {
//       toast({ title: "Failed", description: err.message, variant: "destructive" })
//     } finally { setSubmitting(false) }
//   }

//   if (loading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin text-ocean-600" /></div>

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <Card className="shadow-2xl border-0 overflow-hidden bg-white">
//         <CardHeader className="bg-ocean-50/30 border-b border-ocean-100 p-8">
//           <h2 className="text-3xl font-bold text-ocean-950">Reservation Details</h2>
//           <p className="text-ocean-600">Secure your luxury stay at Wilder Beach's Retreat</p>
//         </CardHeader>

//         <CardContent className="p-8 space-y-12">
//           {/* 1. Dates */}
//           <section className="space-y-4">
//             <h3 className="text-xs font-black  tracking-[0.2em] text-ocean-400 flex items-center">
//               <Calendar className="mr-2 h-4 w-4 text-ocean-600"/>  Stay Duration
//             </h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-[11px] font-bold text-ocean-800 ml-1">CHECK-IN</label>
//                 <Input type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required className="h-12 border-ocean-100 bg-ocean-50/20 focus:bg-white transition-all" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-[11px] font-bold text-ocean-800 ml-1">CHECK-OUT</label>
//                 <Input type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required className="h-12 border-ocean-100 bg-ocean-50/20 focus:bg-white transition-all" />
//               </div>
//             </div>
//           </section>

//           {/* 2. Categories (Multi-Select) */}
//           <section className="space-y-4">
//             <div className="flex justify-between items-center">
//               <h3 className="text-xs font-black tracking-[0.2em] text-ocean-400 flex items-center">
//                 <CheckCircle2 className="mr-2 h-4 w-4 text-ocean-600"/>  Room Categories
//               </h3>
//               {checkingData && <Loader2 className="h-4 w-4 animate-spin text-ocean-400"/>}
//             </div>

//             <div className="grid gap-4">
//               {roomTypes.find(r => r.name === selectedRoomType)?.tariffs?.map((tariff) => {
//                 const isSelected = selectedRooms.find(r => r.category === tariff.category);
//                 const price = categoryPrices[tariff.category] || tariff.price;
//                 const isOffer = offers[tariff.category];
//                 const avail = availabilityMap[tariff.category] ?? 0;

//                 return (
//                   <div key={tariff.category} className={`relative p-5 border-2 rounded-2xl transition-all duration-300 ${isSelected ? "border-ocean-600 bg-ocean-50/40 shadow-md ring-1 ring-ocean-600/10" : "border-gray-100 hover:border-ocean-200"}`}>
//                     <label className="flex items-center cursor-pointer justify-between">
//                       <div className="flex items-center gap-5">
//                         <div className="relative flex items-center">
//                           <input 
//                             type="checkbox" 
//                             disabled={avail <= 0}
//                             className="h-4 w-4 rounded-lg border-ocean-200 text-ocean-600 focus:ring-ocean-500 cursor-pointer disabled:opacity-30 transition-all"
//                             checked={!!isSelected}
//                             onChange={(e) => {
//                               if(e.target.checked) {
//                                 setSelectedRooms([...selectedRooms, { category: tariff.category, price, rooms: 1, adults: 2, children: 0 }])
//                               } else {
//                                 setSelectedRooms(selectedRooms.filter(r => r.category !== tariff.category))
//                               }
//                             }}
//                           />
//                         </div>
//                         <div>
//                           {isOffer && <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold flex items-center w-fit mb-1 animate-pulse"><Sparkles className="h-2.5 w-2.5 mr-1"/> SEASONAL DISCOUNT</span>}
//                           <p className="font-extrabold text-ocean-950 text-lg leading-tight">{tariff.category}</p>
//                           <p className={`text-[11px] font-bold mt-1 ${avail > 0 ? "text-ocean-500" : "text-red-500"}`}>{avail > 0 ? `${avail} Rooms Available` : "Rooms Unavailable"}
//                             {/* Niche wali line add karein */}
//   {avail > 0 && ` • Max ${maxGuestMap[tariff.category] || 2} Guests/Room`}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-black text-ocean-900 text-sm tracking-tight">₹{price}</p>
//                         <p className="text-[10px] text-ocean-400  font-black tracking-widest">Per Night</p>
//                       </div>
//                     </label>

//                     <AnimatePresence>
//                       {isSelected && (
//                         <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-6 grid grid-cols-3 gap-4 pt-5 border-t border-ocean-100">
//                           <Counter label="Rooms" value={isSelected.rooms} onInc={() => updateRoomDetail(tariff.category, 'rooms', 1)} onDec={() => updateRoomDetail(tariff.category, 'rooms', -1)} max={avail} />
//                           <Counter label="Adults" value={isSelected.adults} onInc={() => updateRoomDetail(tariff.category, 'adults', 1)} onDec={() => updateRoomDetail(tariff.category, 'adults', -1)} />
//                           <Counter label="Children" value={isSelected.children} onInc={() => updateRoomDetail(tariff.category, 'children', 1)} onDec={() => updateRoomDetail(tariff.category, 'children', -1)} />
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 )
//               })}
//             </div>
//           </section>

//           {/* 3. Guest Info */}
//           <section className="space-y-4 pt-4">
//             <h3 className="text-xs font-black  tracking-[0.2em] text-ocean-400 flex items-center">
//               <User className="mr-2 h-4 w-4 text-ocean-600"/>  Personal Details
//             </h3>
//             <div className="grid md:grid-cols-2 gap-4">
//                <IconInput icon={<User className="h-4 w-4"/>} placeholder="First Name" value={firstName} onChange={setFirstName} required />
//                <IconInput icon={<User className="h-4 w-4"/>} placeholder="Last Name" value={lastName} onChange={setLastName} required />
//                <IconInput icon={<Mail className="h-4 w-4"/>} type="email" placeholder="Email" value={email} onChange={setEmail} required />
//                <IconInput icon={<Phone className="h-4 w-4"/>} type="tel" placeholder="Mobile" value={phone} onChange={setPhone} required />
//             </div>
//           </section>

//           {/* Submit */}
//           <div className="pt-8 border-t border-ocean-50 space-y-6">
//             <div className="bg-ocean-50/50 p-5 rounded-2xl flex items-start gap-4 border border-ocean-100">
//               <Shield className="h-6 w-6 text-ocean-600 shrink-0 mt-0.5" />
//               <p className="text-xs text-ocean-800 leading-relaxed font-medium">
//                 Payments are handled securely via **Razorpay SSL Encryption**. By proceeding, you agree to our 24h cancellation policy.
//               </p>
//             </div>

//             <label className="flex items-center gap-3 cursor-pointer group">
//               <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="h-4 w-4 rounded border-ocean-300 text-ocean-600" />
//               <span className="text-xs text-ocean-700 group-hover:text-ocean-950 transition-colors">I confirm all information is correct and I accept the terms.</span>
//             </label>

//             <Button type="submit" disabled={submitting || selectedRooms.length === 0} className="w-full h-16 bg-ocean-600 hover:bg-ocean-700 text-lg font-black tracking-[0.1em] shadow-xl shadow-ocean-100 active:scale-[0.98] transition-all rounded-2xl">
//               {submitting ? <Loader2 className="animate-spin mr-2"/> : "CONFIRM RESERVATION"}
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </form>
//   )
// }

// function Counter({ label, value, onInc, onDec, max }: any) {
//   return (
//     <div className="flex flex-col items-center bg-white border border-ocean-50 rounded-2xl p-1 shadow-sm ">
//       <span className="text-[10px] font-black text-ocean-300 uppercase mb-2 tracking-tighter">{label}</span>
//       <div className="flex items-center gap-4">
//         <button type="button" onClick={onDec} className="w-9 h-9 flex items-center justify-center hover:bg-ocean-50 rounded-full text-ocean-600 border border-ocean-50 transition-colors"><Minus className="h-3 w-3"/></button>
//         <span className="font-extrabold text-ocean-950 text-base w-4 text-center">{value}</span>
//         <button type="button" onClick={onInc} disabled={max && value >= max} className="w-8 h-8 flex items-center justify-center hover:bg-ocean-50 rounded-full text-ocean-600 border border-ocean-50 transition-colors disabled:opacity-20"><Plus className="h-3 w-3"/></button>
//       </div>
//     </div>
//   )
// }

// function IconInput({ icon, ...props }: any) {
//   return (
//     <div className="relative">
//       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ocean-300">{icon}</div>
//       <Input className="h-12 pl-11 border-ocean-100 bg-ocean-50/10 focus:bg-white rounded-xl" {...props} onChange={(e) => props.onChange(e.target.value)} />
//     </div>
//   )
// }




"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Users, Shield, Loader2, Minus, Plus, CheckCircle2, Sparkles, Mail, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { fetchRoomTypes, checkRoomAvailability, createBooking, type RoomType } from "@/lib/frappe-api"
import { useToast } from "@/hooks/use-toast"
import { useSearchParams } from "next/navigation"

interface SelectedRoom {
  category: string;
  price: number;
  rooms: number;
  adults: number;
  children: number;
}

export default function BookingForm({ onSummaryUpdate }: { onSummaryUpdate: (data: any) => void }) {
  const { toast } = useToast()
  const [roomTypes, setRoomTypes] = useState<RoomType[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [checkingData, setCheckingData] = useState(false)

  // Dynamic States from Backend
  const [categoryPrices, setCategoryPrices] = useState<Record<string, number>>({})
  const [availabilityMap, setAvailabilityMap] = useState<Record<string, number>>({})
  const [offers, setOffers] = useState<Record<string, boolean>>({})
  const [maxGuestMap, setMaxGuestMap] = useState<Record<string, number>>({});
  // Form States
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [selectedRoomType, setSelectedRoomType] = useState("")
  const [selectedRooms, setSelectedRooms] = useState<SelectedRoom[]>([])

  // Guest Details
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)

  const searchParams = useSearchParams()
  const roomFromUrl = searchParams.get("room")
  const today = new Date().toISOString().split("T")[0]

  useEffect(() => {
    fetchRoomTypes()
      .then(setRoomTypes)
      .catch(() => toast({ title: "Failed to load rooms", variant: "destructive" }))
      .finally(() => setLoading(false))
    if (roomFromUrl) setSelectedRoomType(roomFromUrl)
  }, [roomFromUrl, toast])

 
  useEffect(() => {
   

    const scanCategories = async () => {
       if (!selectedRoomType || !checkIn || !checkOut) return;
      setCheckingData(true);
      const room = roomTypes.find(r => r.name === selectedRoomType);
      if (!room?.tariffs) return;

      const newPrices: Record<string, number> = {};
      const newAvail: Record<string, number> = {};
      const newOffers: Record<string, boolean> = {};
      const newMaxGuests: Record<string, number> = {};

      await Promise.all(room.tariffs.map(async (tariff: any) => {
        console.log("Full Tariff Object:", tariff); // <-- Ye check karein
    console.log(`Category: ${tariff.category}, Max Guest: ${tariff.max_guest}`);
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_FRAPPE_SITE_URL}/api/method/hotel_booking.api.booking.get_room_price?room_type=${encodeURIComponent(selectedRoomType)}&check_in=${checkIn}&check_out=${checkOut}&category=${encodeURIComponent(tariff.category)}`);
          const data = await res.json();
          
          
          if (data.message) {
          newPrices[tariff.category] = data.message.price;
          newOffers[tariff.category] = data.message.is_seasonal; // Backend se aayega true/false
          newMaxGuests[tariff.category] = tariff.max_guest || 2;
        }

          const avail = await checkRoomAvailability(selectedRoomType, checkIn, checkOut, tariff.category);
          newAvail[tariff.category] = typeof avail === 'number' ? avail : 0;
        } catch {
          newPrices[tariff.category] = tariff.price;
         newOffers[tariff.category] = false;
         newMaxGuests[tariff.category] = tariff.max_guest || 2;
        }
      }));

      setCategoryPrices(newPrices);
      setAvailabilityMap(newAvail);
      setOffers(newOffers);
      setCheckingData(false);
      setMaxGuestMap(newMaxGuests);
    };

    scanCategories();
  }, [selectedRoomType, checkIn, checkOut, roomTypes]);

  
  const updateRoomDetail = (category: string, field: keyof SelectedRoom, change: number) => {
  setSelectedRooms(prev => prev.map(item => {
    if (item.category === category) {
      const currentVal = item[field] as number;
      let newVal = currentVal + change;
      
      const maxRooms = availabilityMap[category] || 1;
      const maxLimitPerRoom = maxGuestMap[category] || 2; // Child table capacity

      if (field === 'rooms') {
        newVal = Math.max(1, Math.min(maxRooms, newVal));
      } else {
        // Validation: Adults + Children
        const adultsCount = field === 'adults' ? newVal : item.adults;
        const childrenCount = field === 'children' ? newVal : item.children;
        const totalGuests = adultsCount + childrenCount;
        const totalCapacity = item.rooms * maxLimitPerRoom;

        // Agar user limit cross kar raha hai toh toast dikhao aur update mat karo
        if (change > 0 && totalGuests > totalCapacity) {
          toast({
            title: "Capacity Exceeded",
            description: `${category} allows max ${maxLimitPerRoom} guests per room. Total capacity for ${item.rooms} room(s) is ${totalCapacity}.`,
            variant: "destructive"
          });
          return item; 
        }

        // Min limit check
        newVal = field === 'adults' ? Math.max(1, newVal) : Math.max(0, newVal);
      }

      return { ...item, [field]: newVal };
    }
    return item;
  }));
}
  // Sync with Summary
  useEffect(() => {
    if (onSummaryUpdate && selectedRoomType && checkIn && checkOut && selectedRooms.length > 0) {
      const room = roomTypes.find((r) => r.name === selectedRoomType)
      const nights = Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) || 0

      const totalRooms = selectedRooms.reduce((acc, r) => acc + r.rooms, 0)
      const totalAmount = selectedRooms.reduce((acc, r) => acc + ( (categoryPrices[r.category] || r.price) * r.rooms * nights), 0)

      onSummaryUpdate({
        roomTypeName: room?.room_type_name || selectedRoomType,
        roomImage: room?.image,
        checkIn, checkOut, nights,
        adults: selectedRooms.reduce((acc, r) => acc + r.adults, 0),
        children: selectedRooms.reduce((acc, r) => acc + r.children, 0),
        roomsRequired: totalRooms,
        pricePerNight: totalAmount / (nights || 1) / (totalRooms || 1),
        category: selectedRooms.map(r => `${r.category} (${r.rooms}R)`).join(", "),
        totalAmount: totalAmount,
      })
    }
  }, [selectedRooms, checkIn, checkOut, selectedRoomType, roomTypes, categoryPrices, onSummaryUpdate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreeTerms || selectedRooms.length === 0) return toast({ title: "Error", description: "Select a room and agree to terms", variant: "destructive" });

    setSubmitting(true)
    try {
      const result = await createBooking({
        guest_name: `${firstName} ${lastName}`.trim(),
        phone, email,
        room_type: selectedRoomType,
        check_in: checkIn,
        check_out: checkOut,
        rooms_required: selectedRooms.reduce((acc, r) => acc + r.rooms, 0),
        adults: selectedRooms.reduce((acc, r) => acc + r.adults, 0),
        children: selectedRooms.reduce((acc, r) => acc + r.children, 0),
        category: JSON.stringify(selectedRooms),
      })
      window.location.href = `/booking/success?booking_id=${result.booking_id}`
    } catch (err: any) {
      toast({ title: "Failed", description: err.message, variant: "destructive" })
    } finally { setSubmitting(false) }
  }

  if (loading) return <div className="flex justify-center p-20"><Loader2 className="animate-spin text-green-600" /></div>

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="shadow-2xl border-0 overflow-hidden bg-white">
        <CardHeader className="bg-green-50/30 border-b border-ocean-100 p-5">
          <h2 className="text-[16px] font-sarif font-semibold text-green-950">Reservation Details</h2>
          <p className=" text-sm font-serif  text-gray-600">Secure your luxury stay at Wilder Beach's Retreat</p>
        </CardHeader>

        <CardContent className="p-8 space-y-12">
          {/* 1. Dates */}
          <section className="space-y-3">
            <h3 className="text-xs font-black  tracking-[0.1em] text-green-950 flex items-center">
              <Calendar className="mr-2 h-3 w-3 text-green-900"/>  Stay Duration
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-green-900 ml-1">CHECK-IN</label>
                <Input type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required className="h-11 border-green-100 bg-ocean-50/20 focus:bg-white transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-green-900 ml-1">CHECK-OUT</label>
                <Input type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required className="h-11 border-green-100 bg-ocean-50/20 focus:bg-white transition-all" />
              </div>
            </div>
          </section>

          {/* 2. Categories (Multi-Select) */}
          <section className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black tracking-[0.1em] text-green-950 flex items-center">
                <CheckCircle2 className="mr-2 h-3 w-3 text-green-800"/>  Room Categories
              </h3>
              {checkingData && <Loader2 className="h-4 w-4 animate-spin text-ocean-400"/>}
            </div>

            <div className="grid gap-4">
              {roomTypes.find(r => r.name === selectedRoomType)?.tariffs?.map((tariff) => {
                const isSelected = selectedRooms.find(r => r.category === tariff.category);
                const price = categoryPrices[tariff.category] || tariff.price;
                const isOffer = offers[tariff.category];
                const avail = availabilityMap[tariff.category] ?? 0;

                return (
                  <div key={tariff.category} className={`relative p-5 border-2 rounded-2xl transition-all duration-300 ${isSelected ? "border-ocean-600 bg-green-50/40 shadow-md ring-1 ring-green-600/10" : "border-gray-100 hover:border-gray-200"}`}>
                    <label className="flex items-center cursor-pointer justify-between">
                      <div className="flex items-center gap-5">
                        <div className="relative flex items-center">
                          <input 
                            type="checkbox" 
                            disabled={avail <= 0}
                            className="h-4 w-4 rounded-lg border-gray-200 text-gray-600 focus:ring-gray-500 cursor-pointer disabled:opacity-30 transition-all"
                            checked={!!isSelected}
                            onChange={(e) => {
                              if(e.target.checked) {
                                setSelectedRooms([...selectedRooms, { category: tariff.category, price, rooms: 1, adults: 2, children: 0 }])
                              } else {
                                setSelectedRooms(selectedRooms.filter(r => r.category !== tariff.category))
                              }
                            }}
                          />
                        </div>
                        <div>
                          {isOffer && <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold flex items-center w-fit mb-1 animate-pulse"><Sparkles className="h-2.5 w-2.5 mr-1"/> SEASONAL DISCOUNT</span>}
                          <p className="font-extrabold text-green-950 text-lg leading-tight">{tariff.category}</p>
                          <p className={`text-[9px] font-bold mt-1 ${avail > 0 ? "text-yellow-500" : "text-red-500"}`}>{avail > 0 ? `${avail} Rooms Available` : "Rooms Unavailable"}
                            {/* Niche wali line add karein */}
                            {avail > 0 && ` • Max ${maxGuestMap[tariff.category] || 2} Guests/Room`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-ocean-900 text-sm tracking-tight">₹{price}</p>
                        <p className="text-[9px] text-gray-400  font-serif ">Per Night</p>
                      </div>
                    </label>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-3 grid grid-cols-3 gap-4 pt-5 border-t border-green-100">
                          <Counter label="Rooms" value={isSelected.rooms} onInc={() => updateRoomDetail(tariff.category, 'rooms', 1)} onDec={() => updateRoomDetail(tariff.category, 'rooms', -1)} max={avail} />
                          <Counter label="Adults" value={isSelected.adults} onInc={() => updateRoomDetail(tariff.category, 'adults', 1)} onDec={() => updateRoomDetail(tariff.category, 'adults', -1)} />
                          <Counter label="Children" value={isSelected.children} onInc={() => updateRoomDetail(tariff.category, 'children', 1)} onDec={() => updateRoomDetail(tariff.category, 'children', -1)} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </section>

          {/* 3. Guest Info */}
          <section className="space-y-2 ">
            <h3 className="text-xs font-black  tracking-[0.1em] text-green-950 flex items-center">
              <User className="mr-2 h-4 w-4 text-green-900"/>  Personal Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
               <IconInput icon={<User className="h-4 w-4"/>} placeholder="First Name" value={firstName} onChange={setFirstName} required />
               <IconInput icon={<User className="h-4 w-4"/>} placeholder="Last Name" value={lastName} onChange={setLastName} required />
               <IconInput icon={<Mail className="h-4 w-4"/>} type="email" placeholder="Email" value={email} onChange={setEmail} required />
               <IconInput icon={<Phone className="h-4 w-4"/>} type="tel" placeholder="Mobile" value={phone} onChange={setPhone} required />
            </div>
          </section>

          {/* Submit */}
          <div className="pt-5 border-t border-green-50 space-y-6">
            <div className="bg-green-50/50 p-5 rounded-2xl flex items-start gap-4 border border-green-100">
              <Shield className="h-6 w-6 text-green-900 shrink-0 mt-0.5" />
              <p className="text-xs text-ocean-900 leading-relaxed font-medium">
                Payments are handled securely via **Razorpay SSL Encryption**. By proceeding, you agree to our 24h cancellation policy.
              </p>
            </div>

            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="h-4 w-4 rounded border-ocean-300 text-ocean-600" />
              <span className="text-xs text-ocean-700 group-hover:text-ocean-950 transition-colors">I confirm all information is correct and I accept the terms.</span>
            </label>

            <Button type="submit" disabled={submitting || selectedRooms.length === 0} className="w-full h-12 bg-green-950 hover:bg-green-900 text-lg font-semibold font-serif tracking-[0.1em] shadow-xl shadow-green-100 active:scale-[0.98] transition-all rounded-2xl">
              {submitting ? <Loader2 className="animate-spin mr-2"/> : "CONFIRM RESERVATION"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}

function Counter({ label, value, onInc, onDec, max }: any) {
  return (
    <div className="flex flex-col items-center bg-white border border-green-50 rounded-2xl p-1 shadow-sm ">
      <span className="text-[10px] font-black text-yellow-400 uppercase mb-2 tracking-tighter">{label}</span>
      <div className="flex items-center gap-4">
        <button type="button" onClick={onDec} className="w-9 h-9 flex items-center justify-center hover:bg-green-50 rounded-full text-green-600 border border-ocean-50 transition-colors"><Minus className="h-3 w-3"/></button>
        <span className="font-extrabold text-ocean-950 text-base w-4 text-center">{value}</span>
        <button type="button" onClick={onInc} disabled={max && value >= max} className="w-8 h-8 flex items-center justify-center hover:bg-green-50 rounded-full text-green-600 border border-ocean-50 transition-colors disabled:opacity-20"><Plus className="h-3 w-3"/></button>
      </div>
    </div>
  )
}

function IconInput({ icon, ...props }: any) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-900">{icon}</div>
      <Input className="h-12 pl-11 border-green-100 bg-green-50/10 focus:bg-white rounded-xl" {...props} onChange={(e) => props.onChange(e.target.value)} />
    </div>
  )
}