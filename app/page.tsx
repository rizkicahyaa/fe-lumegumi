import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import About from './components/About'
import Games from './components/Games'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <HeroCarousel />
      <About />
      <Games />
      <Contact />
      <Footer />
    </main>
  )
}



