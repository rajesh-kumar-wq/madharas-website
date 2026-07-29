import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import BookingCTA from './components/BookingCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Services />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
