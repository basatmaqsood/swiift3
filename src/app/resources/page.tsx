import BusinessOperationsSection from "./components/business-operations-section";
import GetStartedAndFooter from "./components/get-started-and-footer";
import PoliciesComplianceSection from "./components/policies-compliance-section";
import DriverResourcesSection from "./components/resources-driver-section";
import ResourcesHeroSection from "./components/resources-hero-section";
import SafetySecuritySection from "./components/safety-security-section";




export default function Home() {
  return (
    <main className="min-h-screen">
        <ResourcesHeroSection/>
        <DriverResourcesSection/>
        <SafetySecuritySection/>
        <PoliciesComplianceSection/>
        <BusinessOperationsSection/>
        <GetStartedAndFooter/>
    </main>
  
  )
}