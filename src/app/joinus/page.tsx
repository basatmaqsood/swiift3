import DriverBenefits from "./components/DriverBenefits";
import ApplicationSection from "./components/ApplicationSection";
import DriverHero from "./components/DriverHero";
import EcosystemSection from "./components/EcosystemSection";
import DriverAppSection from "./components/DriverAppSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <DriverHero/>
      <DriverBenefits/>
      <EcosystemSection/>
      <ApplicationSection/>
      <DriverAppSection/>
    </main>
  
  )
}