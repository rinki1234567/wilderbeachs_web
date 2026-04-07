import type { Metadata } from "next"
import ActivitiesHero from "@/components/activities/activities-hero"
// import WaterSportsSection from "@/components/activities/water-sports-section"
// import LandActivitiesSection from "@/components/activities/land-activities-section"
// import WellnessSection from "@/components/activities/wellness-section"
import BookingSection from "@/components/activities/booking-section"
export const metadata: Metadata = {
  title: "Activities & Experiences - WilderBeach Resort",
  description:
    "Explore our wide range of activities and experiences, from thrilling water sports to relaxing spa treatments and cultural adventures.",
}

export default function ActivitiesPage() {
  return (
    <div>

      <ActivitiesHero />
      {/* <WaterSportsSection />
      <LandActivitiesSection />
      <WellnessSection /> */}
      <BookingSection />
    </div>
  )
}
