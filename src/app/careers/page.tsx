import CareersHeroSection from "./components/careers-hero-section";
import OpenPositionsSection from "./components/careers-positions-section";
import RecruitmentProcess from "./components/careers-recruitment-process";
import NewsAndFooter from "./components/news-and-footer";
import SecurityRecruitmentSection from "./components/security-recruitment-section";
import WorkplaceCultureSection from "./components/workplace-culture-section";




export default function Home() {
  return (
    <main className="min-h-screen">
        <CareersHeroSection/>
        <OpenPositionsSection/>
        <RecruitmentProcess/>
        <SecurityRecruitmentSection/>
        <WorkplaceCultureSection/>
        <NewsAndFooter/>
    </main>
  
  )
}