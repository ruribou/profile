"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BookingPage() {
  const { resolvedTheme } = useTheme();
  const calTheme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: calTheme,
        cssVarsPerTheme: {
          light: {
            "cal-bg": "#fafafa",
            "cal-bg-emphasis": "#ffffff",
          },
          dark: {
            "cal-bg": "#141422",
            "cal-bg-emphasis": "#1a1a2e",
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, [calTheme]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#141422] relative overflow-hidden">
      {/* Bokeh */}
      <div className="bokeh-container">
        <div className="bokeh w-56 h-56 bg-blue-300/20 dark:bg-blue-500/15 top-[5%] left-[5%]" style={{ animationDelay: "0s" }} />
        <div className="bokeh w-44 h-44 bg-purple-300/15 dark:bg-purple-500/10 top-[10%] right-[10%]" style={{ animationDelay: "3s" }} />
        <div className="bokeh w-40 h-40 bg-cyan-300/15 dark:bg-cyan-500/10 bottom-[15%] right-[15%]" style={{ animationDelay: "6s" }} />
        <div className="bokeh w-36 h-36 bg-pink-300/15 dark:bg-pink-500/10 bottom-[10%] left-[10%]" style={{ animationDelay: "5s" }} />
      </div>

      <div className="prism-streaks" />

      {/* Header */}
      <header className="fixed top-0 right-0 w-full z-50">
        <div className="bg-white/60 dark:bg-[#1a1a2e]/70 backdrop-blur-xl border-b border-white/50 dark:border-white/5">
          <nav className="container mx-auto flex items-center py-3 px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </nav>
        </div>
        <div className="rainbow-divider" />
      </header>

      <main className="relative z-10 pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-reveal-up">
            <p className="text-xs font-mono text-purple-400 mb-2 tracking-wider">// booking</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-50 mb-2">
              Schedule a Meeting
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              ご都合の良い日時をお選びください
            </p>
          </div>

          <div className="glass-card rounded-2xl p-2 md:p-4 animate-reveal-up delay-200">
            <Cal
              calLink="ruribou/meeting"
              className="w-full overflow-hidden"
              config={{
                layout: "month_view",
                theme: calTheme,
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
