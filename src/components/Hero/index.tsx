// Components
import * as Components from './components'

function Hero() {

  return (
    <section className="hero min-h-[90vh] bg-base-100 mb-10">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <Components.Logo />
          <Components.HeroContent />
          <Components.ExploreBtn />
        </div>
      </div>
    </section>
  )
}

export default Hero
