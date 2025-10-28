import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Heart, Lightbulb, Trophy } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in education and character development.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Fostering empathy, kindness, and understanding in our school community.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing modern teaching methods and technology for better learning.",
    },
    {
      icon: Trophy,
      title: "Achievement",
      description: "Celebrating success and encouraging students to reach their full potential.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Excellence in Education{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Since 1985
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Panchra High School has been a beacon of educational excellence for over three decades, shaping young
              minds and preparing students for a bright future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 1985 with a vision to provide quality education to all, Panchra High School has grown from a
                small institution to one of the most respected schools in the region. Our commitment to academic
                excellence, character building, and holistic development has remained unwavering throughout our journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in nurturing not just academic brilliance but also creativity, critical thinking, and moral
                values. Our state-of-the-art facilities, experienced faculty, and innovative teaching methods ensure
                that every student receives the best possible education.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="School Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">38+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur"
              >
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
