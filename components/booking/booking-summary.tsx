"use client"

import { motion } from "framer-motion"
import { Calendar, Users, MapPin, Star, Shield } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export interface BookingSummaryData {
  roomTypeName: string
  roomImage?: string
  checkIn: string
  checkOut: string
  nights: number
  roomsRequired: number
  pricePerNight: number
  totalAmount: number
  adults: number
  children: number
  category?: string
}

interface BookingSummaryProps {
  data?: BookingSummaryData | null
}

function formatDate(dateStr: string) {
  if (!dateStr) return "-"
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default function BookingSummary({ data }: BookingSummaryProps) {


  const hasData = data && data.nights > 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <Card className="shadow-lg border-0">
        <CardHeader>
          <h3 className="text-xl font-bold text-ocean-950">Booking Summary</h3>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-b pb-4 border-green-200">
            <div className="flex items-start space-x-4">
              {/* <Image
                src="/placeholder.svg?height=80&width=120&text=Room"
                alt={data?.roomTypeName || "Room"}
                width={120}
                height={80}
                className="rounded-lg object-cover"
              /> */}
              <Image
                src={
                  data?.roomImage
                    ? `${process.env.NEXT_PUBLIC_FRAPPE_SITE_URL}${data.roomImage}`
                    : "/luxuary/room1.jpg"
                }
                alt={data?.roomTypeName || "Room"}
                width={140}
                height={100}
                className="rounded-xl object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold   text-ocean-950">
                  {hasData ? data.roomTypeName : "Select dates and room"}
                </h4>
                {hasData && (
                  <>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-paradise-500 fill-current" />
                      <span className="text-sm text-green-900 ml-1">Luxury stay</span>
                    </div>
                    <p className="text-sm text-green-900 mt-1">
                      ₹{data.pricePerNight?.toLocaleString()}/night
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {hasData && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-green-900 mr-2" />
                  <span className="text-sm text-green-900">Check-in</span>
                </div>
                <span className="font-semibold text-ocean-950">{formatDate(data.checkIn)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-green-900 mr-2" />
                  <span className="text-sm text-green-900">Check-out</span>
                </div>
                <span className="font-semibold text-ocean-950">{formatDate(data.checkOut)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-green-900 mr-2" />
                  <span className="text-sm text-green-900">Rooms</span>
                </div>
                <span className="font-semibold text-ocean-950">{data.roomsRequired}</span>
              </div>

              <div className="flex items-center justify-between">
  <div className="flex items-center">
    <Users className="h-4 w-4 text-green-900 mr-2" />
    <span className="text-sm text-green-900">Guests</span>
  </div>
  <span className="font-semibold text-ocean-950">
    {data.adults} Adults, {data.children} Children
  </span>
</div>



              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-green-900 mr-2" />
                  <span className="text-sm text-green-900">Duration</span>
                </div>
                <span className="font-semibold text-ocean-950">{data.nights} nights</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {hasData && (
        <Card className="shadow-lg border-0">
          <CardHeader>
            <h3 className="text-xl font-bold text-ocean-950">Price Breakdown</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-green-900">
                Room rate ({data.nights} nights × {data.roomsRequired} room{data.roomsRequired > 1 ? "s" : ""})
              </span>
              <span className="font-semibold text-green-950">
                ₹{data.totalAmount?.toLocaleString()}
              </span>
            </div>
            <div className="border-t pt-4 border-ocean-200">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-ocean-950">Total</span>
                <span className="text-green-800">₹{data.totalAmount?.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="shadow-lg border-0 bg-tropical-50 border-tropical-200">
        <CardContent className="p-4">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-tropical-600 mr-3" />
            <div>
              <p className="text-sm font-semibold text-tropical-800">Secure Booking</p>
              <p className="text-xs text-tropical-700">SSL encrypted & PCI compliant via Razorpay</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0">
        <CardContent className="p-4">
          <h4 className="font-semibold text-ocean-950 mb-2">Cancellation Policy</h4>
          <p className="text-xs text-ocean-900 leading-relaxed">
            Free cancellation until 48 hours before check-in. After that, the first night will be charged.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
