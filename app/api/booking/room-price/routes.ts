import { NextResponse } from "next/server"
// import { getRoomPrice} from "@/lib/frappe-server"
import { getRoomPrice } from "@/lib/frappe-server"
export async function GET() {
  try {
    const roomTypes = await getRoomPrice()
    return NextResponse.json(roomTypes)
  } catch (error) {
    console.error("Room types fetch error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch room types" },
      { status: 500 }
    )
  }
}
