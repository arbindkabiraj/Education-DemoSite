import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, CheckCircle, XCircle, Clock } from "lucide-react"

export default function StudentAttendance() {
  const attendanceData = {
    overall: 92,
    present: 138,
    absent: 12,
    total: 150,
  }

  const subjectAttendance = [
    { subject: "Mathematics", present: 28, total: 30, percentage: 93 },
    { subject: "Physics", present: 26, total: 30, percentage: 87 },
    { subject: "Chemistry", present: 29, total: 30, percentage: 97 },
    { subject: "Biology", present: 27, total: 30, percentage: 90 },
    { subject: "English", present: 28, total: 30, percentage: 93 },
  ]

  const recentAttendance = [
    { date: "2024-03-15", status: "present", subjects: ["Math", "Physics", "Chemistry"] },
    { date: "2024-03-14", status: "present", subjects: ["Biology", "English", "History"] },
    { date: "2024-03-13", status: "absent", subjects: ["Math", "Physics"] },
    { date: "2024-03-12", status: "present", subjects: ["Chemistry", "Biology"] },
    { date: "2024-03-11", status: "present", subjects: ["English", "History", "Geography"] },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Attendance</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your attendance record and patterns</p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceData.overall}%</div>
            <Progress value={attendanceData.overall} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceData.present}</div>
            <p className="text-xs text-muted-foreground">Days attended</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceData.absent}</div>
            <p className="text-xs text-muted-foreground">Days missed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Days</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceData.total}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject-wise Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Subject-wise Attendance</CardTitle>
            <CardDescription>Your attendance percentage for each subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectAttendance.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{subject.subject}</span>
                    <span>
                      {subject.present}/{subject.total} ({subject.percentage}%)
                    </span>
                  </div>
                  <Progress value={subject.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Attendance</CardTitle>
            <CardDescription>Your attendance for the last 5 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAttendance.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {day.status === "present" ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <div>
                      <p className="font-medium">{day.date}</p>
                      <p className="text-sm text-muted-foreground">{day.subjects.join(", ")}</p>
                    </div>
                  </div>
                  <Badge variant={day.status === "present" ? "default" : "destructive"}>{day.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
