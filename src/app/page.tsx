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
      <footer className="w-full py-6 bg-blue-900 text-white text-center text-sm">
        © 2025 ruribou. All rights reserved.
      </footer>
    </>
  );
}
