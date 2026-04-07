import { NextRequest, NextResponse } from "next/server"
import { createPaymentOrder } from "@/lib/frappe-server"

export async function POST(request: NextRequest) {
  try {
    const { booking_id } = await request.json()
    if (!booking_id) {
      return NextResponse.json({ error: "booking_id is required" }, { status: 400 })
    }
    const result = await createPaymentOrder(booking_id)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Payment order error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Payment setup failed" },
      { status: 500 }
    )
  }
}
