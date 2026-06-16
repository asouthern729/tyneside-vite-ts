import logo from "@/assets/tyneside/tyneside-logo.png"

export const Logo = () => (
  <img
    src={logo}
    alt="Tyneside Innovations Logo"
    className="logo-png mx-auto mb-4 h-40 w-auto md:h-70 md:mb-10" />
)

export const ExploreBtn = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="#services" className="btn btn-accent btn-lg uppercase rounded-sm shadow-xl">
      Explore Our Services
    </a>
    <a
      href="https://calendly.com/tyneside"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline btn-lg uppercase rounded-sm shadow-xl">
      Book a Call
    </a>
  </div>
)

export const HeroContent = () => (
  <>
    <Heading />
    <SubHeading />
  </>
)

const Heading = () => (
  <h1 className="mb-6 text-3xl font-extrabold uppercase leading-tight tracking-wide text-base-content md:text-5xl lg:text-6xl">
    Digital Infrastructure That Works
  </h1>
)

const SubHeading = () => (
  <p className="mb-10 text-base leading-relaxed text-base-content/70 md:text-lg lg:text-xl">
    Tyneside Innovations delivers precision web development and AI integration
    for government agencies and forward-thinking businesses.
  </p>
)