// import { NextRequest, NextResponse } from "next/server"
// import { checkRoomAvailability } from "@/lib/frappe-server"

// export async function POST(request: NextRequest) {
//   try {
//     const { room_type, check_in, check_out, category } = await request.json()
//     if (!room_type || !check_in || !check_out || !category) {
//       return NextResponse.json(
//         { error: "room_type, check_in, check_out are required" },
//         { status: 400 }
//       )
//     }
//     const available = await checkRoomAvailability(room_type, check_in, check_out, category)
//     return NextResponse.json(available)
//   } catch (error) {
//     console.error("Availability check error:", error)
//     return NextResponse.json(
//       { error: error instanceof Error ? error.message : "Availability check failed" },
//       { status: 500 }
//     )
//   }
// }


import { NextRequest, NextResponse } from "next/server"
import { checkRoomAvailability } from "@/lib/frappe-server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { room_type, check_in, check_out, category } = data
    if (!room_type || !check_in || !check_out ) {
      return NextResponse.json(
        { error: "room_type, check_in, and check_out are required" },
        { status: 400 }
      )
    }
    const available = await checkRoomAvailability(
      room_type, 
      check_in, 
      check_out, 
      category || null 
    )

    return NextResponse.json(available)

  } catch (error) {
    console.error("Availability check error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Availability check failed" },
      { status: 500 }
    )
  }
}