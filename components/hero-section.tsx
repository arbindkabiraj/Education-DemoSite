import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Suri Vidyasagar College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-white">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Welcome to {" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Suri Vidyasagar College
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Nurturing minds, building futures. Where excellence meets innovation in education, creating
                tomorrow's leaders through comprehensive learning and character development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Explore Our School
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/notices">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Latest Notices
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold">1200+</h3>
              <p className="text-blue-200">Students</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-blue-200">Expert Teachers</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold">38</h3>
              <p className="text-blue-200">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
