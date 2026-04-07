/**
 * Hotel Booking API Client
 * Uses Next.js API routes (which proxy to Frappe hotel_booking app)
 */
export interface Feature {
  feature_name: string
  icon?: string
  description?: string
}

export interface Amenity {
  amenity_name: string
  icon?: string
  description?: string
}

export interface Tariff {
  category: string
  price: number
  max_guest: number
  
}

export interface Pricing {
  plan_name: string
  category: string
  price: number
}

export interface RoomType {
  name: string
  room_type_name: string
  base_price: number
  max_guests?: number
  image?: string
  description?: string
  features: Feature[]
  amenities: Amenity[]
  tariffs: Tariff[]
  pricing: Pricing[]
  
}

export interface BookingResult {
  booking_id: string
  total_amount: number
}

export interface PaymentOrderResult {
  order_id: string
  amount: number
  currency: string
  key: string
  booking_id: string
}

/** Fetch room types */
export async function fetchRoomTypes(): Promise<RoomType[]> {
  const res = await fetch("/api/booking/room-types")
  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

/** Check available room count for date range */
// export async function checkRoomAvailability(
//   roomType: string,
//   checkIn: string,
//   checkOut: string,
//   category: string 
// ): Promise<number> {
//   const res = await fetch("/api/booking/availability", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       room_type: roomType,
//       check_in: checkIn,
//       check_out: checkOut,
//       category: category, // Pass category to API
//     }),
//   })
//   if (!res.ok) {
//     const err = await res.json().catch(() => ({}))
//     throw new Error(err.error || "Availability check failed")
//   }
//   return res.json()
// }

export async function checkRoomAvailability(room_type: string, check_in: string, check_out: string, category: string) {
 
  const response = await fetch("/api/booking/availability", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      room_type: room_type,
      check_in: check_in,
      check_out: check_out,
      category: category || "" 
    }),
  });
  if (!response.ok) {
    //  const errorText = await response.text();
     
     return 0;
  }
  return response.json();
}

/** Create booking */
export async function createBooking(params: {
  guest_name: string
  phone: string
  email: string
  room_type: string
  check_in: string
  check_out: string
  rooms_required: number
  adults: number
  children: number
  category: string
  
}): Promise<BookingResult> {
  const res = await fetch("/api/booking/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || "Booking failed")
  return data
}

/** Get Razorpay payment order */
export async function createPaymentOrder(bookingId: string): Promise<PaymentOrderResult> {
  const res = await fetch("/api/booking/payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ booking_id: bookingId }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || "Payment setup failed")
  return data
}

