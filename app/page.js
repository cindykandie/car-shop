import HeroSection from './components/heroSection'
import LatestImports from './components/latestImports'
import CarMakeSection from './components/makes'
import WhyMotokaaSection from './components/whyMotokaa'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <CarMakeSection />
      <WhyMotokaaSection />
      <LatestImports />
    </main>
  )
}
