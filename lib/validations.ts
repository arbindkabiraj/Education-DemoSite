import { z } from "zod"

export const studentLoginSchema = z.object({
  studentId: z.string().min(1, "Student ID is required").min(3, "Student ID must be at least 3 characters"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
})

export const instituteLoginSchema = z.object({
  username: z.string().min(1, "Username is required").min(3, "Username must be at least 3 characters"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
})

export const studentRegistrationSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    grade: z.string().min(1, "Grade is required"),
    parentName: z.string().min(1, "Parent name is required"),
    parentPhone: z.string().min(10, "Parent phone must be at least 10 digits"),
    address: z.string().min(1, "Address is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type StudentLoginForm = z.infer<typeof studentLoginSchema>
export type InstituteLoginForm = z.infer<typeof instituteLoginSchema>
export type StudentRegistrationForm = z.infer<typeof studentRegistrationSchema>
export type ContactForm = z.infer<typeof contactFormSchema>
