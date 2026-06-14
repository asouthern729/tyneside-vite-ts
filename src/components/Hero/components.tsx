import logo from "@/assets/tyneside/tyneside-logo.png"

export const Logo = () => (
  <img
    src={logo}
    alt="Tyneside Innovations"
    className="logo-png mx-auto mb-2 h-60 w-auto" />
)

export const ExploreBtn = () => (
  <a href="#services" className="btn btn-accent btn-lg uppercase rounded-sm shadow-xl">
    Explore Our Services
  </a>
)

export const HeroContent = () => (
  <>
    <Heading />
    <SubHeading />
  </>
)

const Heading = () => (
  <h1 className="mb-6 text-5xl font-extrabold uppercase leading-tight tracking-wide text-base-content lg:text-6xl">
    Building Digital Infrastructure That Works
  </h1>
)

const SubHeading = () => (
  <p className="mb-10 text-lg leading-relaxed text-base-content/70 lg:text-xl">
    Tyneside Innovations delivers precision web development and AI integration
    for government agencies and forward-thinking businesses.
  </p>
)