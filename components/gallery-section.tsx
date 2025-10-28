"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import Image from "next/image"
import ImagePopup from "@/components/image-popup"

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [popupImage, setPopupImage] = useState<{ src: string; alt: string } | null>(null)

  const galleryImages = [
    { src: "/placeholder.svg?height=400&width=600", alt: "School Main Building", category: "Campus" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Science Laboratory", category: "Facilities" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Library", category: "Facilities" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Sports Ground", category: "Sports" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Computer Lab", category: "Technology" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Annual Function", category: "Events" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Classroom", category: "Academic" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Art Room", category: "Creative" },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const openPopup = (src: string, alt: string) => {
    setPopupImage({ src, alt })
  }

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-600 border-purple-600">
              Gallery
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Campus</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a virtual tour of our beautiful campus and state-of-the-art facilities
            </p>
          </div>

          {/* Featured Image Carousel */}
          <div className="relative mb-12">
            <Card className="overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <Image
                  src={galleryImages[currentIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentIndex].alt}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge variant="secondary" className="mb-2">
                    {galleryImages[currentIndex].category}
                  </Badge>
                  <h3 className="text-2xl font-bold">{galleryImages[currentIndex].alt}</h3>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => openPopup(galleryImages[currentIndex].src, galleryImages[currentIndex].alt)}
                >
                  <Expand className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className={`cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 ${
                  index === currentIndex ? "ring-2 ring-purple-600" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="aspect-square relative group">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation()
                        openPopup(image.src, image.alt)
                      }}
                    >
                      <Expand className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Image Popup */}
      {popupImage && (
        <ImagePopup
          src={popupImage.src || "/placeholder.svg"}
          alt={popupImage.alt}
          isOpen={!!popupImage}
          onClose={() => setPopupImage(null)}
        />
      )}
    </section>
  )
}
