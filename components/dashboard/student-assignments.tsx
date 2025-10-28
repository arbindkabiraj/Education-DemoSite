import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Clock } from "lucide-react"

export default function StudentAssignments() {
  const assignments = [
    {
      id: 1,
      title: "Cell Structure and Function Report",
      subject: "Biology",
      dueDate: "2024-03-20",
      status: "pending",
      priority: "high",
      description: "Write a detailed report on cell structure and organelle functions",
      submittedDate: null,
      grade: null,
    },
    {
      id: 2,
      title: "World War II Essay",
      subject: "History",
      dueDate: "2024-03-22",
      status: "pending",
      priority: "medium",
      description: "Analyze the causes and consequences of World War II",
      submittedDate: null,
      grade: null,
    },
    {
      id: 3,
      title: "Quadratic Equations Problem Set",
      subject: "Mathematics",
      dueDate: "2024-03-18",
      status: "submitted",
      priority: "low",
      description: "Solve 20 quadratic equation problems",
      submittedDate: "2024-03-17",
      grade: "A",
    },
    {
      id: 4,
      title: "Chemical Bonding Lab Report",
      subject: "Chemistry",
      dueDate: "2024-03-15",
      status: "graded",
      priority: "medium",
      description: "Lab report on ionic and covalent bonding experiments",
      submittedDate: "2024-03-14",
      grade: "B+",
    },
    {
      id: 5,
      title: "Shakespeare Analysis",
      subject: "English",
      dueDate: "2024-03-25",
      status: "pending",
      priority: "low",
      description: "Character analysis of Hamlet",
      submittedDate: null,
      grade: null,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "destructive"
      case "submitted":
        return "default"
      case "graded":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Assignments</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your assignments and submission status</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Due soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Submitted</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Awaiting grades</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Graded</CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{assignment.title}</CardTitle>
                  <CardDescription>{assignment.subject}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant={getPriorityColor(assignment.priority)}>{assignment.priority}</Badge>
                  <Badge variant={getStatusColor(assignment.status)}>{assignment.status}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{assignment.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                  {assignment.submittedDate && (
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>Submitted: {assignment.submittedDate}</span>
                    </div>
                  )}
                  {assignment.grade && <Badge variant="outline">Grade: {assignment.grade}</Badge>}
                </div>
                {assignment.status === "pending" && <Button size="sm">Submit Assignment</Button>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
