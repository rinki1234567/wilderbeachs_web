import type { Metadata } from "next"
import AccommodationsHero from "@/components/accommodations/accommodations-hero"
import RoomTypesSection from "@/components/accommodations/room-types-section"
import AmenitiesSection from "@/components/accommodations/amenities-section"
import VirtualTourSection from "@/components/accommodations/virtual-tour-section"
import CottageDetail from "@/components/accommodations/cottagedetail"

export const metadata: Metadata = {
  title: "Luxury Accommodations - WilderBeach Resort",
  description:
    "Discover our collection of luxury suites and villas, each designed for ultimate comfort and elegance with breathtaking ocean views.",
}

export default function AccommodationsPage() {
  return (
    <>
      <AccommodationsHero />
      <CottageDetail />
      <RoomTypesSection />
      <AmenitiesSection />
      {/* <VirtualTourSection /> */}
    </>
  )
}
