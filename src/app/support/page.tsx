import FAQSection from "./components/swift-faq-footer";
import SimpleTicketSystem from "./components/swift-simple-ticket-enhanced-fixed";
import SupportChatSection from "./components/swift-support-chat-section";
import SupportSectionOne from "./components/swift-support-section-one";


export default function SupportPage() {
  return (
    <>
    <SupportSectionOne/>
    <SupportChatSection/>
    <SimpleTicketSystem/>
    <FAQSection/>
    </>
  )
}
