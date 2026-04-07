import { NextRequest, NextResponse } from "next/server"
import { createBooking } from "@/lib/frappe-server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { guest_name, phone, email, room_type, check_in, check_out, rooms_required, adults, children, category } = body
    if (!guest_name || !email || !room_type || !check_in || !check_out || !category) {
      return NextResponse.json(
        { error: "guest_name, email, room_type, check_in, check_out, and category are required" },
        { status: 400 }
      )
    }
    const result = await createBooking({
      guest_name,
      category: category ,
      phone: phone || "",
      email,
      room_type,
      check_in,
      check_out,
      rooms_required: Number(rooms_required) || 1,
      adults: Number(adults) || 1,
      children: Number(children) || 0,
    })
    return NextResponse.json(result)
  } catch (error) {
  let message = "Booking failed"

  if (error instanceof Error) {
    try {
      const parsed = JSON.parse(error.message)
      message = parsed.message
    } catch {
      message = error.message
    }
  }

  return NextResponse.json({ error: message }, { status: 500 })
}
}