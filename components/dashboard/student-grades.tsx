import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, TrendingUp } from "lucide-react"

export default function StudentGrades() {
  const subjects = [
    { name: "Mathematics", grade: "A", score: 92, credits: 4, teacher: "Mr. Amit Singh" },
    { name: "Physics", grade: "B+", score: 87, credits: 4, teacher: "Mrs. Priya Sharma" },
    { name: "Chemistry", grade: "A-", score: 89, credits: 4, teacher: "Mrs. Sunita Devi" },
    { name: "Biology", grade: "A", score: 94, credits: 4, teacher: "Mr. Ravi Gupta" },
    { name: "English", grade: "A", score: 91, credits: 3, teacher: "Mrs. Meera Joshi" },
    { name: "History", grade: "B+", score: 85, credits: 3, teacher: "Mr. Suresh Yadav" },
    { name: "Geography", grade: "A-", score: 88, credits: 3, teacher: "Mrs. Kavita Patel" },
    { name: "Computer Science", grade: "A+", score: 96, credits: 3, teacher: "Mr. Deepak Verma" },
  ]

  const overallGPA = 3.7
  const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Grades</h1>
        <p className="text-gray-600 dark:text-gray-400">Your academic performance across all subjects</p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall GPA</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallGPA}</div>
            <p className="text-xs text-muted-foreground">Out of 4.0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCredits}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#12</div>
            <p className="text-xs text-muted-foreground">Out of 45 students</p>
          </CardContent>
        </Card>
      </div>

      {/* Grades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Subject Grades</CardTitle>
          <CardDescription>Detailed breakdown of your performance in each subject</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground">Teacher: {subject.teacher}</p>
                  <p className="text-sm text-muted-foreground">Credits: {subject.credits}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <Progress value={subject.score} className="w-24 mb-1" />
                    <p className="text-sm text-muted-foreground">{subject.score}%</p>
                  </div>
                  <Badge
                    variant={subject.score >= 90 ? "default" : subject.score >= 80 ? "secondary" : "destructive"}
                    className="text-lg px-3 py-1"
                  >
                    {subject.grade}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
