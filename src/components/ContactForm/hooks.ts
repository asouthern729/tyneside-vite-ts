import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export type Status = "idle" | "success" | "error"

export const useHandleContactForm = () => {
  const methods = useForm<ContactFormValues>()
  const [status, setStatus] = useState<Status>("idle")

  useEffect(() => {
    if (status === "idle") return
    const timer = setTimeout(() => setStatus("idle"), 5000)
    
    return () => clearTimeout(timer)
  }, [status])

  return { methods, status, setStatus }
}