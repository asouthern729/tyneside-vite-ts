import { services } from "./utils"

export const Heading = () => (
  <>
    <p className="text-xs font-normal uppercase tracking-[12px] mb-1 text-base-content/50">
      What We Do
    </p>
    <h2 className="mb-12 text-4xl font-extrabold uppercase tracking-[1px] text-base-content">
      Our Services
    </h2>
  </>
)

type ServiceCardProps = {
  title: string
  description: string
  icon: string
}

export const Services = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {services.map((service) => (
      <ServiceCard
        key={service.title}
        icon={service.icon}
        title={service.title}
        description={service.description}
      />
    ))}
  </div>
)

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="card border border-base-300 bg-base-100 transition-transform duration-300 hover:-translate-y-2">
    <div className="card-body">
      <div className="mb-3 flex justify-center"><img src={icon} alt="" className="h-12 w-12" /></div>
      <h3 className="card-title mx-auto text-base-content whitespace-nowrap">{title}</h3>
      <p className="p-2 text-base-content/70 leading-loose">{description}</p>
    </div>
  </div>
)