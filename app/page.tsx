import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import NoticeSection from "@/components/notice-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import TeachersSection from "@/components/teachers-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NoticeSection />
        <AboutSection />
        <GallerySection />
        <TeachersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
