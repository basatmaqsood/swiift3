import Hero from './components/hero'
import ServicesSection from './components/Services'
import MissionSection from './components/Mission'
import LostAndFoundSection from './components/LostAndFound'
import DownloadAndFooter from './components/Download'
import QualitySection from './components/Quality'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <QualitySection/>
      <MissionSection/>
      <LostAndFoundSection/>
      <DownloadAndFooter/>
    </div>
  )
}