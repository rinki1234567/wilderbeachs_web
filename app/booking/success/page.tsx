import { Suspense } from "react"
import BookingSuccessClient from "./booking-success-client"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading booking...</div>}>
      <BookingSuccessClient />
    </Suspense>
  )
}