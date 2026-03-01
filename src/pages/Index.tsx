import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <ReviewsSection />
    <FAQSection />
    <ShareButtons />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
