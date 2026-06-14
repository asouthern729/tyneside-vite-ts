import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import * as Components from "./components"

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

type Status = "idle" | "success" | "error"

function ContactForm() {
  const methods = useForm<ContactFormValues>()
  const [status, setStatus] = useState<Status>("idle")

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle")
    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      methods.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="bg-base-200 py-20">
      <div className="mx-auto max-w-xl px-4 lg:px-8">
        <p className="text-xs font-normal uppercase tracking-[12px] text-base-content/50 mb-1">
          Get In Touch
        </p>
        <h2 className="mb-2 text-4xl font-extrabold uppercase tracking-[1px] text-base-content">
          Start a Conversation
        </h2>
        <p className="mb-10 text-base-content/70">
          Tell us about your project and we will get back to you within one business day.
        </p>
        {status === "success" && (
          <div role="alert" className="alert alert-success mb-6">
            <span>Message sent! We'll be in touch within one business day.</span>
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="alert alert-error mb-6">
            <span>Something went wrong. Please try again or email us directly.</span>
          </div>
        )}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <Components.NameInput />
            <Components.EmailInput />
            <Components.MessageInput />
            <Components.SubmitBtn />
          </form>
        </FormProvider>
      </div>
    </section>
  )
}

export default ContactForm
