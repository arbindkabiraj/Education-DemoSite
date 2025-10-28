import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, Download } from "lucide-react"

export default function AdminStudents() {
  const students = [
    { id: "STU001", name: "John Doe", grade: "Class 12", section: "A", attendance: 95, status: "active" },
    { id: "STU002", name: "Jane Smith", grade: "Class 11", section: "B", attendance: 88, status: "active" },
    { id: "STU003", name: "Mike Johnson", grade: "Class 10", section: "A", attendance: 92, status: "active" },
    { id: "STU004", name: "Sarah Wilson", grade: "Class 12", section: "B", attendance: 97, status: "active" },
    { id: "STU005", name: "David Brown", grade: "Class 9", section: "C", attendance: 85, status: "inactive" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Students</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage student records and information</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search students..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Student Records</CardTitle>
          <CardDescription>Complete list of enrolled students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Student ID</th>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Grade</th>
                  <th className="text-left p-4">Section</th>
                  <th className="text-left p-4">Attendance</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="p-4 font-medium">{student.id}</td>
                    <td className="p-4">{student.name}</td>
                    <td className="p-4">{student.grade}</td>
                    <td className="p-4">{student.section}</td>
                    <td className="p-4">{student.attendance}%</td>
                    <td className="p-4">
                      <Badge variant={student.status === "active" ? "default" : "secondary"}>{student.status}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
