import AboutHeroComplete from "./components/about-hero-complete";
import EqualOpportunitiesSection from "./components/equal-opportunities-section";
import LifeAtSwiftSection from "./components/life-at-swift-section";
import PoliciesSection from "./components/policies-section";
import Footer from "./components/swift-footer";
import InnovationSection from "./components/swift-innovation-security";



export default function Home() {
  return (
    <main className="min-h-screen">
        <AboutHeroComplete/>
        <EqualOpportunitiesSection/>
        <LifeAtSwiftSection/>
        <PoliciesSection/>
        <InnovationSection/>
        <Footer/>
    </main>
  
  )
}