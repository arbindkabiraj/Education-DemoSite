"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/lib/auth-context"
import { studentLoginSchema, type StudentLoginForm } from "@/lib/validations"
import { GraduationCap, Lock, User } from "lucide-react"

export default function StudentLoginPage() {
  const [formData, setFormData] = useState<StudentLoginForm>({
    studentId: "",
    password: "",
  })
  const [errors, setErrors] = useState<Partial<StudentLoginForm>>({})
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    try {
      const validatedData = studentLoginSchema.parse(formData)

      // Mock authentication
      setTimeout(() => {
        if (validatedData.studentId === "STU001" && validatedData.password === "password123") {
          const userData = {
            id: "1",
            name: "John Doe",
            email: "john.doe@student.panchrahighschool.edu",
            role: "student" as const,
            studentId: "STU001",
            grade: "Class 12",
          }
          login(userData)
          toast({
            title: "Login Successful",
            description: "Welcome back to your student portal!",
          })
          router.push("/dashboard/student")
        } else {
          toast({
            title: "Login Failed",
            description: "Invalid Student ID or Password",
            variant: "destructive",
          })
        }
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      if (error instanceof Error) {
        const zodError = JSON.parse(error.message)
        const fieldErrors: Partial<StudentLoginForm> = {}
        zodError.forEach((err: any) => {
          fieldErrors[err.path[0] as keyof StudentLoginForm] = err.message
        })
        setErrors(fieldErrors)
      }
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear error when user starts typing
    if (errors[e.target.name as keyof StudentLoginForm]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: undefined,
      }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Student Login</CardTitle>
              <CardDescription>Access your student portal with your credentials</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="studentId"
                      name="studentId"
                      type="text"
                      placeholder="Enter your Student ID"
                      value={formData.studentId}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                  {errors.studentId && <p className="text-sm text-red-500">{errors.studentId}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                  {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-muted-foreground">Demo credentials: STU001 / password123</p>
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link href="/register/student" className="text-blue-600 hover:underline">
                    Register here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
