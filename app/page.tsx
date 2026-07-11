import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <HeroCarousel />
    </main>
  )
}
