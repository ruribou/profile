import Image from "next/image";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
