// Components
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Process from "@/components/Process"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

function Home() {

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default Home