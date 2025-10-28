"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import TeachersSlider from "@/components/teachers-slider"

export default function TeachersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".teacher-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="teachers" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-600">
              Our Faculty
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Expert Teachers
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated faculty members bring years of experience and passion for education
            </p>
          </div>

          <TeachersSlider />
        </div>
      </div>

      {/* <style jsx>{`
        .teacher-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style> */}
    </section>
  )
}
