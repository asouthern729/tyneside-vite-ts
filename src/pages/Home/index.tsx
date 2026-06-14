// Components
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import ContactForm from "@/components/ContactForm"

function Home() {

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactForm />
      </main>
    </div>
  )
}

export default Home