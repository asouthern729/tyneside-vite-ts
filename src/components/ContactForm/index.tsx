import { FormProvider } from "react-hook-form"
import { useHandleContactForm } from "./hooks"
import { handleFormSubmit } from "./utils"

// Components
import * as Components from "./components"

function ContactForm() {
  const { methods, status, setStatus } = useHandleContactForm()

  return (
    <section id="contact" className="bg-base-200 py-20">
      <div className="mx-auto max-w-xl px-4 lg:px-8">
        <Components.Header />
        <Components.CalendlyLink />
        <Components.FormSubmitMsg status={status} />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((formData) => handleFormSubmit({ formData, methods, setStatus }))} className="flex flex-col gap-6">
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
