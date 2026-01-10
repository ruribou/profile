import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import CareerSection from "./components/CareerSection";
import SocialSection from "./components/SocialSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <SocialSection />
      </main>
      <footer className="w-full py-8 bg-slate-950 border-t border-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 ruribou. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
