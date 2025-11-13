"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/lib/auth-context"
import { instituteLoginSchema, type InstituteLoginForm } from "@/lib/validations"
import { Shield, Lock, User } from "lucide-react"

export default function InstituteLoginPage() {
  const [formData, setFormData] = useState<InstituteLoginForm>({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState<Partial<InstituteLoginForm>>({})
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    try {
      const validatedData = instituteLoginSchema.parse(formData)

      // Mock authentication
      setTimeout(() => {
        if (validatedData.username === "admin" && validatedData.password === "admin123") {
          const userData = {
            id: "admin1",
            name: "Dr. Rajesh Kumar",
            email: "admin@surividyasagar.edu",
            role: "admin" as const,
          }
          login(userData)
          toast({
            title: "Login Successful",
            description: "Welcome to the admin portal!",
          })
          router.push("/dashboard/admin")
        } else {
          toast({
            title: "Login Failed",
            description: "Invalid username or password",
            variant: "destructive",
          })
        }
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      if (error instanceof Error) {
        const zodError = JSON.parse(error.message)
        const fieldErrors: Partial<InstituteLoginForm> = {}
        zodError.forEach((err: any) => {
          fieldErrors[err.path[0] as keyof InstituteLoginForm] = err.message
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
    if (errors[e.target.name as keyof InstituteLoginForm]) {
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
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold">Institute Login</CardTitle>
              <CardDescription>Administrative access for staff and management</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                  {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
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
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <p>Demo credentials: admin / admin123</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
