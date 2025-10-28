import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock, Bell } from "lucide-react"
import Link from "next/link"
import { notices } from "@/lib/mock-data"

export default function NoticeSection() {
  const recentNotices = notices.slice(0, 3)

  return (
    <section
      id="notices"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-600">
              Latest Updates
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Important{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Notices</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest announcements and important information from our school
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentNotices.map((notice, index) => (
              <Card
                key={notice.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    >
                      {notice.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {notice.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {notice.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-3 leading-relaxed">
                    {notice.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>2 min read</span>
                    </div>
                    <Link href={`/notices/${notice.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group/btn hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600 hover:text-green-700"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/notices">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Bell className="mr-2 h-5 w-5" />
                View All Notices
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
