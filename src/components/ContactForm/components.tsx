import { useFormContext } from "react-hook-form"

// Types
import type { ContactFormValues } from "./index"

export const NameInput = () => {
  const { register, formState: { errors } } = useFormContext<ContactFormValues>()

  const error = errors.name?.message

  return (
    <div className="form-control flex flex-col gap-1">
      <label className="pl-2 label">
        <span className="label-text text-base-content">Full Name</span>
      </label>
      <input
        type="text"
        placeholder="Jane Smith"
        className="input input-bordered w-full focus:border-accent focus:outline-accent/50"
        {...register("name", { required: "Name is required" })} />
      <FormError error={error} />
    </div>
  )
}

export const EmailInput = () => {
  const { register, formState: { errors } } = useFormContext<ContactFormValues>()

  const error = errors.email?.message

  return (
    <div className="form-control flex flex-col gap-1">
      <label className="pl-2 label">
        <span className="label-text text-base-content">Email Address</span>
      </label>
      <input
        type="email"
        placeholder="jane@example.com"
        className="input input-bordered w-full focus:border-accent focus:outline-accent/50"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })} />
      <FormError error={error} />
    </div>
  )
}

export const MessageInput = () => {
  const { register, formState: { errors } } = useFormContext<ContactFormValues>()

  const error = errors.message?.message

  return (
    <div className="form-control flex flex-col gap-1">
      <label className="pl-2 label">
        <span className="label-text text-base-content">Message</span>
      </label>
      <textarea
        placeholder="Tell us about your project..."
        className="textarea textarea-bordered w-full focus:border-accent focus:outline-accent/50"
        rows={5}
        {...register("message", {
          required: "Message is required",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters",
          },
        })} />
      <FormError error={error} />
    </div>
  )
}

export const SubmitBtn = () => {
  const { formState: { isSubmitting } } = useFormContext<ContactFormValues>()

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="btn btn-accent uppercase w-full rounded-sm shadow-xl">
      {isSubmitting ? "Sending..." : "Send Message"}
    </button>
  )
}

const FormError = ({ error }: { error: string | undefined }) => {
  if(!error) return null

  return (
    <p className="text-sm text-red-500">{error}</p>
  )
}