import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import CareerSection from "./components/CareerSection";
import SocialSection from "./components/SocialSection";
import { supabase } from "@/lib/supabase";
import type { SocialLink } from "@/lib/types";

export default async function Home() {
  const { data: socialData } = await supabase
    .from("social_links")
    .select("*")
    .order("sort_order", { ascending: true })
    .returns<SocialLink[]>();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <SocialSection socialData={socialData ?? []} />
      </main>
      <footer className="w-full relative">
        <div className="rainbow-divider" />
        <div className="py-10 bg-white dark:bg-[#0f0f1a]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 dark:text-gray-600 text-xs tracking-wide">
              &copy; 2025-2026 ruribou. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
