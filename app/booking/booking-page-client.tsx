"use client"

import { useState } from "react"
import BookingForm from "@/components/booking/booking-form"
import BookingSummary from "@/components/booking/booking-summary"
import type { BookingSummaryData } from "@/components/booking/booking-summary"

export function BookingPageClient() {
  const [summaryData, setSummaryData] = useState<BookingSummaryData | null>(null)

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <BookingForm onSummaryUpdate={setSummaryData} />
      </div>
      <div>
        <BookingSummary data={summaryData} />
      </div>
    </div>
  )
}
