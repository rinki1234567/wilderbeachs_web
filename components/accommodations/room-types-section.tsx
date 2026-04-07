"use client"
import { motion } from "framer-motion"
import { Wifi, Car, Coffee, Waves, Utensils, Dumbbell, Users, Bed, Bath, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { RoomType, fetchRoomTypes } from "@/lib/frappe-api"
import { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx";

// const roomTypes = [
//   {
//     id: 1,
//     name: "Spacious wildlife-inspired villas",

//     period: "per night",
//     image: "/luxuary/room1.jpg",
//     description: "Elegant suite with panoramic ocean views and private balcony",
//     features: ["Ocean View", "Private Balcony", "King Bed", "Mini Bar", "Work Desk"],
//     specs: { guests: 2, bedrooms: 1, bathrooms: 1, size: "650 sq ft" },
//     amenities: [Coffee, Utensils],

//     pricing: [
//       { title: "Villas & Machan", regular: "₹25,000", special: "₹15,000" },
//       { title: "Cottages", regular: "₹15,000", special: "₹12,000" },
//       { title: "Deluxe Room", regular: "₹8,000", special: "₹8,000" },
//     ]



//   },
//   {
//     id: 2,
//     name: "Suitable for families and couples",

//     period: "per night",
//     image: "/luxuary/room2.jpg",
//     description: "Spacious villa with direct beach access and private pool",
//     features: ["Private Balcony", "Private Dining", "Full Kitchen", "Garden View", "Outdoor Dining"],
//     specs: { guests: 4, bedrooms: 2, bathrooms: 2, size: "1200 sq ft" },
//     amenities: [Car, Waves, Dumbbell],


//     pricing: [
//       { title: "Villas & Machan", regular: "₹25,000", special: "₹15,000" },
//       { title: "Cottages", regular: "₹15,000", special: "₹12,000" },
//       { title: "Deluxe Room", regular: "₹8,000", special: "₹8,000" },
//     ]
//   },
//   {
//     id: 3,
//     name: "Nature view",

//     period: "per night",
//     image: "/luxuary/room3.jpg",
//     description: "Ultimate luxury with panoramic views and butler service",
//     features: ["Private Balcony", "Full Kitchen", "Private Dining", "Wine Cellar"],
//     specs: { guests: 6, bedrooms: 3, bathrooms: 3, size: "2000 sq ft" },
//     amenities: [Coffee, Utensils, Car, Waves, Dumbbell],

//     pricing: [
//       { title: "Villas & Machan", regular: "₹25,000", special: "₹15,000" },
//       { title: "Cottages", regular: "₹15,000", special: "₹12,000" },
//       { title: "Deluxe Room", regular: "₹8,000", special: "₹8,000" },
//     ]

//   }
// ]

export default function RoomTypesSection() {

  const SITE_URL = process.env.NEXT_PUBLIC_FRAPPE_SITE_URL

  const [rooms, setRooms] = useState<RoomType[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedRooms, setExpandedRooms] = useState<number[]>([])
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null)

  useEffect(() => {
    fetchRoomTypes()
      .then(setRooms)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p className="text-center py-10">Loading rooms...</p>
  }

  const toggleFeatures = (index: number) => {
    setExpandedRooms((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-10 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-900 via-tropical-600 to-green-900 bg-clip-text text-transparent">
              Choose Your Perfect Stay
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From intimate suites to spacious villas, each accommodation is designed to provide the ultimate in comfort
            and luxury.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                    {/* <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.room_type_name}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    /> */}

                    <Image
                      src={
                        room.image
                          ? `${SITE_URL}${room.image}`
                          : "/luxuary/room1.jpg"
                      }
                      alt={room.room_type_name}
                      width={600}
                      height={400}
                      className="w-full h-60 object-cover"
                    />
                  </motion.div>
                  
                </div>

                <CardContent className="p-6">
                 
                  <h3 className="text-sm font-bold text-ocean-950 mb-2">{room.name}</h3>
                 
                  <div className="mb-2">
                    <h4 className=" text-yellow-600 text-xs ">Features</h4>

                    <div className="flex   flex-wrap gap-2">
                      {(expandedRooms.includes(index)
                        ? room.features
                        : room.features?.slice(0, 3)
                      ).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-[8px] bg-green-100/60 font-serif text-green-900 px-4 p-[2px] rounded-full"
                        >
                          {feature.feature_name}
                        </span>
                      ))}

                      {room.features && room.features.length > 3 && (
                        <span
                          onClick={() => toggleFeatures(index)}
                          className="text-xs text-green-700 cursor-pointer hover:underline"
                        >
                          {expandedRooms.includes(index)
                            ? "Show less"
                            : `+${room.features.length - 3} more`}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  {room.pricing && (
                    <div className="mb-4  ">
                      <h5 className="font-semibold text-gray-600  text-[13px]">Regular Tariff</h5>

                      <div className="space-y-1  text-gray-700 shadow-sm p-2 rounded-lg ">
                      
                        {room.tariffs?.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-[9px]">
                            <span>{item.category}</span>
                            <span className="font-medium text-[9px]">₹ {item.price}</span>
                          </div>
                        ))}
                      </div>

                      <h5 className="font-semibold text-gray-600 text-[13px] mt-3">
                        Special Opening Prices include’s all 3 meals and hi-tea
                      </h5>
                      <p className="text-[9px] text-green-600 mb-1  ">
                        (Applicable during our partial opening period)
                      </p>

                      <div className="space-y-1 text-[9px] text-gray-700 shadow-sm p-2 rounded-lg">
                        {room.pricing.map((item, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span>{item.category}</span>
                            <span className="font-medium text-green-600 text-[9px]">
                              ₹ {item.price}
                            </span>

                          </div>





                        ))}
                      </div>

                      <p className="text-[9px] text-gray-600 mb-1  mt-3">
                        Special prices are available for a limited period while the property is partially operational
                      </p>
                    </div>
                  )}


                  {/* Amenities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-yellow-600   mb-2 text-[11px]">Amenities</h4>
                    <div className="flex space-x-2">
                     

                      {room.amenities?.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-[8px] bg-green-100/60 font-serif text-green-900 px-4 p-[2px] rounded-full"
                        >
                          {amenity.amenity_name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {/* <Link href="/booking" className="flex-1"> */}
                    <Link
                      href={{
                        pathname: "/booking",
                        query: { room: room.name, image: room.image ,category: room.tariffs?.[0]?.category|| "" },
                      }}
                      className="flex-1"
                    >
                      <Button className="w-full bg-[#0B2B26] hover:bg-[#0B2B26]/90  text-white font-semibold">
                        Book Now
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedRoom(room)}
                      className="px-4 bg-transparent text-green-700 border-green-900 hover:bg-green-50"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedRoom && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative shadow-2xl"
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedRoom(null)}
        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-600 hover:text-black shadow-md transition-all"
      >
        <RxCross1 size={20}/>
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Left Side: Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <Image
            src={
              selectedRoom.image
                ? `${SITE_URL}${selectedRoom.image}`
                : "/luxuary/room1.jpg"
            }
            alt={selectedRoom.room_type_name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Details Section */}
        <div className="md:w-1/2 p-6 md:p-8">
          <h2 className="text-xl font-bold text-ocean-950 mb-4">{selectedRoom.name}</h2>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {selectedRoom.description}
          </p>

          {/* Features - Same style as Card */}
          <div className="mb-6">
            <h4 className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-3">Features</h4>
            <div className="flex flex-wrap gap-2">
              {selectedRoom.features?.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-green-100/60 font-serif text-green-900 px-3 py-1 rounded-full"
                >
                  {feature.feature_name}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Section - Exactly matching Card structure */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            {/* Regular Tariff */}
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              <h5 className="font-bold text-gray-600 text-[12px] mb-2 uppercase tracking-wide">Regular Tariff</h5>
              <div className="space-y-1.5">
                {selectedRoom.tariffs?.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-[11px] text-gray-700">
                    <span>{item.category}</span>
                    <span className="font-semibold text-gray-900">₹ {item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Pricing */}
            {selectedRoom.pricing && selectedRoom.pricing.length > 0 && (
              <div className="bg-green-50/50 p-3 rounded-xl border border-green-100">
                <h5 className="font-bold text-[#0B2B26] text-[12px] mb-1 uppercase tracking-wide">
                  Special Opening Prices include’s all 3 meals and hi-tea
                </h5>
                <p className="text-[10px] text-green-600 mb-2 ">
                  (Applicable during our partial opening period)
                </p>
                <div className="space-y-1.5">
                  {selectedRoom.pricing.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-[11px]">
                      <span className="text-gray-700">{item.category}</span>
                      <span className="font-bold text-green-700">₹ {item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h4 className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-3">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {selectedRoom.amenities?.map((amenity, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-green-50 font-serif text-green-800 px-3 py-1 border border-green-100 rounded-full"
                >
                  {amenity.amenity_name}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <Link
            href={{
              pathname: "/booking",
              query: { 
                room: selectedRoom.name, 
                image: selectedRoom.image,
                category: selectedRoom.tariffs?.[0]?.category || "" 
              },
            }}
          >
            <Button className="w-full bg-[#0B2B26] hover:bg-[#0B2B26]/90 text-white font-bold py-6 rounded-xl shadow-lg transition-all">
              Book This Room Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
)}
    </section>
  )
}
