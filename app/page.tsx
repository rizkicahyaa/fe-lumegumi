import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import About from './components/About'
import Games from './components/Games'

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <HeroCarousel />
      <About />
      <Games />
    </main>
  )
}

