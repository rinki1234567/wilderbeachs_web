/**
 * Server-side Frappe API calls (used by Next.js API routes)
 * Calls Frappe directly - no CORS from server
 */

const getApiBase = () => {
  const base =
    process.env.NEXT_PUBLIC_FRAPPE_SITE_URL ||
    process.env.FRAPPE_SITE_URL ||
    ""
  return base.replace(/\/$/, "")
}

async function frappeFetch<T>(
  method: string,
  args: Record<string, unknown> = {}
): Promise<T> {
  const base = getApiBase()
  if (!base) {
    throw new Error("NEXT_PUBLIC_FRAPPE_SITE_URL is not configured")
  }

  const url = `${base}/api/method/${method}`
  const body = new URLSearchParams()
  Object.entries(args).forEach(([k, v]) => {
    body.append(k, typeof v === "object" ? JSON.stringify(v) : String(v ?? ""))
  })

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  })

  const data = await res.json()
  // if (data.exc) {
  //   const msg = data._server_messages
  //     ? JSON.parse(data._server_messages)[0]
  //     : data.exc
  //   throw new Error(typeof msg === "string" ? msg : "API error")
  // }
  if (data.exc_type) {
    let msg = "API error"

    if (data._server_messages) {
      const messages = JSON.parse(data._server_messages)
      const first = JSON.parse(messages[0])
      msg = first.message
    }

    throw new Error(msg)
  }
  return data.message as T
}

export async function getRoomTypes() {
  return frappeFetch<Array<{ name: string; room_type_name: string; base_price: number; max_guests?: number }>>(
    "hotel_booking.api.availability.get_room_types"
  )
}

export async function checkRoomAvailability(
  roomType: string,
  checkIn: string,
  checkOut: string,
  category: string | null = null
) {
  return frappeFetch<number>("hotel_booking.api.availability.check_room_availability", {
    room_type: roomType,
    check_in: checkIn,
    check_out: checkOut,
    category: category
  })
}

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
  category?: string
 
}) {
  return frappeFetch<{ booking_id: string; total_amount: number }>(
    "hotel_booking.api.booking.create_booking",
    params
  )
}

export async function createPaymentOrder(bookingId: string) {
  return frappeFetch<{ order_id: string; amount: number; currency: string; key: string; booking_id: string }>(
    "hotel_booking.api.payment.create_payment_order",
    { booking_id: bookingId }
  )
}

