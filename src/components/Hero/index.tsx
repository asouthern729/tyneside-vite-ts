// Components
import * as Components from './components'

function Hero() {

  return (
    <section className="hero hero-texture bg-base-100 mb-10 md:min-h-[80vh] lg:min-h-[90vh]">
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
