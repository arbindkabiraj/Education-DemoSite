import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { notices } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface NoticePageProps {
  params: {
    id: string
  }
}

export default function NoticePage({ params }: NoticePageProps) {
  const notice = notices.find((n) => n.id === params.id)

  if (!notice) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/notices">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Notices
              </Button>
            </Link>
          </div>

          {/* A4 Style Notice */}
          <Card className="bg-white dark:bg-gray-900 shadow-2xl border-0 min-h-[297mm] max-w-[210mm] mx-auto">
            <CardHeader className="border-b-2 border-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">PHS</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">SURI VIDYASAGAR COLLEGE</h1>
                    <p className="text-sm text-muted-foreground">Excellence in Education Since 1985</p>
                  </div>
                </div>

                <div className="border-t border-b border-gray-300 py-2">
                  <h2 className="text-xl font-semibold text-center text-red-600 dark:text-red-400">OFFICIAL NOTICE</h2>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Date: {notice.date}</span>
                </div>
                <Badge variant="outline" className="border-blue-600 text-blue-600">
                  {notice.category}
                </Badge>
              </div>

              <div className="space-y-4">
                <CardTitle className="text-2xl font-bold text-center border-b pb-2">{notice.title}</CardTitle>

                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-justify leading-relaxed">{notice.content}</p>

                  <div className="mt-8 space-y-4">
                    <h3 className="font-semibold text-lg">Important Points:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>All students must comply with the above instructions</li>
                      <li>Parents are requested to ensure their ward's participation</li>
                      <li>For any queries, contact the college office</li>
                      <li>This notice is effective immediately</li>
                    </ul>
                  </div>

                  <div className="mt-12 flex justify-between items-end">
                    <div>
                      <p className="font-medium">Issued by:</p>
                      <p className="text-sm text-muted-foreground">College Administration</p>
                    </div>
                    <div className="text-right">
                      <div className="border-t border-gray-400 w-32 mb-2"></div>
                      <p className="font-medium">Principal</p>
                      <p className="text-sm text-muted-foreground">Suri Vidyasagar College</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
