"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/lib/auth-context"
import { BookOpen, Calendar, FileText, TrendingUp, Bell, Award } from "lucide-react"

export default function StudentDashboardOverview() {
  const { user } = useAuth()

  const stats = [
    {
      title: "Overall Grade",
      value: "A-",
      description: "85.5% Average",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      title: "Attendance",
      value: "92%",
      description: "This semester",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Assignments",
      value: "8/10",
      description: "Completed",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      title: "Rank",
      value: "#12",
      description: "In class",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
  ]

  const recentGrades = [
    { subject: "Mathematics", grade: "A", score: 92, date: "2024-03-15" },
    { subject: "Physics", grade: "B+", score: 87, date: "2024-03-14" },
    { subject: "Chemistry", grade: "A-", score: 89, date: "2024-03-13" },
    { subject: "English", grade: "A", score: 94, date: "2024-03-12" },
  ]

  const upcomingAssignments = [
    { subject: "Biology", title: "Cell Structure Report", dueDate: "2024-03-20", priority: "high" },
    { subject: "History", title: "World War Essay", dueDate: "2024-03-22", priority: "medium" },
    { subject: "Geography", title: "Climate Change Project", dueDate: "2024-03-25", priority: "low" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back, {user?.name}! Here's your academic overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Recent Grades
            </CardTitle>
            <CardDescription>Your latest test and assignment scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{grade.subject}</p>
                    <p className="text-xs text-muted-foreground">{grade.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={grade.score} className="w-20" />
                    <Badge variant={grade.score >= 90 ? "default" : grade.score >= 80 ? "secondary" : "destructive"}>
                      {grade.grade}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Upcoming Assignments
            </CardTitle>
            <CardDescription>Don't forget these deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{assignment.title}</p>
                    <p className="text-xs text-muted-foreground">{assignment.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{assignment.dueDate}</p>
                    <Badge
                      variant={
                        assignment.priority === "high"
                          ? "destructive"
                          : assignment.priority === "medium"
                            ? "default"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {assignment.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
