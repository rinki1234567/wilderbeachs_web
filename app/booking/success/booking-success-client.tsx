"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { createPaymentOrder } from "@/lib/frappe-api"
import Link from "next/link"

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void }
  }
}

export default function BookingSuccessPage() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("booking_id")
  const paid = searchParams.get("paid") === "1"

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePayment = async () => {
    if (!bookingId) return
    setLoading(true)
    setError(null)
    try {
      const order = await createPaymentOrder(bookingId)
      if (typeof window !== "undefined" && window.Razorpay) {
        const rzp = new window.Razorpay({
          key: order.key,
          amount: order.amount,
          currency: order.currency,
          order_id: order.order_id,
          name: "WilderBeach Resort",
          description: `Booking ${bookingId}`,
          handler: () => {
            window.location.href = `/booking/success?booking_id=${encodeURIComponent(bookingId)}&paid=1`
          },
        })
        rzp.open()
      } else {
        setError("Razorpay not loaded. Please refresh the page.")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment setup failed")
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=> {
    if (bookingId && !paid) {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      document.body.appendChild(script)
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [bookingId, paid])

  return (
    <div className="min-h-[60vh] py-20 bg-gray-50">
      <div className="max-w-lg mx-auto px-4">
        <Card className="shadow-lg text-center">
          <CardContent className="py-12">
            <div className="text-green-600 mb-4">
              <CheckCircle className="h-16 w-16 mx-auto" />
            </div>
            {paid ? (
              <>
                <h1 className="text-2xl font-bold text-ocean-950 mb-2">Payment Successful!</h1>
                <p className="text-ocean-700 mb-6">
                  Your booking is confirmed. A confirmation email has been sent to you.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-ocean-950 mb-2">Booking Created!</h1>
                <p className="text-ocean-700 mb-6">
                  Your booking has been created. Please complete payment to confirm your reservation.
                </p>
              </>
            )}

            {bookingId && (
              <p className="mb-6 font-semibold text-ocean-950">
                Booking ID: <span className="text-ocean-600">{bookingId}</span>
              </p>
            )}

            {!paid && bookingId && (
              <>
                {error && (
                  <p className="text-red-600 text-sm mb-4">{error}</p>
                )}
                <Button
                  onClick={handlePayment}
                  disabled={loading}
                  className="bg-ocean-600 hover:bg-ocean-700 text-white px-8"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Loading...
                    </>
                  ) : (
                    "Proceed to Payment"
                  )}
                </Button>
              </>
            )}

            <div className="mt-8">
              <Link href="/booking">
                <Button variant="outline" className="text-ocean-700 border-ocean-300">
                  Book Another Room
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
