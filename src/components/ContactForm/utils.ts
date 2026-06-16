import type React from "react"

// Types
import type { UseFormReturn } from "react-hook-form"
import type { ContactFormValues, Status } from "./hooks"

type HandleFormSubmitProps = {
  formData: ContactFormValues
  setStatus: React.Dispatch<React.SetStateAction<Status>>
  methods: UseFormReturn<ContactFormValues>
}

export const handleFormSubmit = async ({ formData, setStatus, methods }: HandleFormSubmitProps) => {
  setStatus("idle")

  const res = await fetch("/.netlify/functions/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })

  if (!res.ok) {
    setStatus("error")
    return
  }
  
  setStatus("success")
  methods.reset()
}