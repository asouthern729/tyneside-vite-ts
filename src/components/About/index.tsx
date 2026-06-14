// Components
import * as Components from './components'

function About() {

  return (
    <section id="about" className="bg-base-100 py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Components.Heading />
        <Components.AboutContent />
      </div>
    </section>
  )
}

export default About
