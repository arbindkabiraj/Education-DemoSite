"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Mail, Award } from "lucide-react"
import { teachers } from "@/lib/mock-data"

export default function TeachersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= teachers.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, teachers.length - itemsPerView) : prev - 1))
  }

  const visibleTeachers = teachers.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleTeachers.map((teacher, index) => (
            <Card
              key={teacher.id}
              className="teacher-card opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:scale-105 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950"
              style={{
                animation: `slideIn 0.6s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold">
                    {teacher.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  {teacher.designation === "Principal" && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{teacher.name}</h3>
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400">{teacher.subject}</p>
                  {teacher.designation && <p className="text-xs text-muted-foreground">{teacher.designation}</p>}
                </div>

                <div className="pt-3 border-t">
                  <div className="flex items-center justify-center text-xs text-muted-foreground">
                    <Mail className="h-3 w-3 mr-1" />
                    <span className="truncate">{teacher.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 shadow-lg z-10"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 shadow-lg z-10"
        onClick={nextSlide}
        disabled={currentIndex + itemsPerView >= teachers.length}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(teachers.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerView) === index ? "bg-orange-600" : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index * itemsPerView)}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
