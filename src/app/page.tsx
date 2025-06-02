import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import CareerSection from "./components/CareerSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <ContactSection />
      </main>
    </>
  );
}
