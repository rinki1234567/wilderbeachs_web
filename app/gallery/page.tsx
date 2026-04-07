import type { Metadata } from "next"
import GalleryHero from "@/components/gallery/gallery-hero"
import PhotoGallery from "@/components/gallery/photo-gallery"
import VideoSection from "@/components/gallery/video-section"
export const metadata: Metadata = {
  title: "Gallery - WilderBeach Resort",
  description: "Explore stunning photos and videos showcasing the beauty and luxury of WilderBeach Resort.",
}
export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <PhotoGallery />
      {/* <VideoSection /> */}
    </>
  )
}
