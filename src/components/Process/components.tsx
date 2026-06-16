import { steps } from "./utils"

export const Heading = () => (
  <>
    <p className="text-xs font-normal uppercase tracking-[12px] mb-1 text-base-content/50">
      Our Process
    </p>
    <h2 className="mb-12 text-4xl font-extrabold uppercase tracking-[1px] text-base-content">
      How We Work
    </h2>
  </>
)

type StepCardProps = {
  number: string
  title: string
  description: string
}

export const Steps = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
    {steps.map((step, i) => (
      <div
        key={step.number}
        className={
          i < 3
            ? "lg:col-span-2 h-full"
            : i === 3
            ? "lg:col-span-2 lg:col-start-2 h-full"
            : "lg:col-span-2 lg:col-start-4 h-full"
        }
      >
        <StepCard {...step} />
      </div>
    ))}
  </div>
)

const StepCard = ({ number, title, description }: StepCardProps) => (
  <div className="card border border-base-300 bg-base-200 transition-transform duration-300 hover:-translate-y-2 h-full">
    <div className="card-body">
      <span className="text-5xl font-extrabold text-accent leading-none mb-2">{number}</span>
      <h3 className="card-title text-base-content">{title}</h3>
      <p className="text-base-content/70 leading-loose">{description}</p>
    </div>
  </div>
)
