"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: {},
          dark: {
            "cal-bg": "oklch(0.129 0.042 264.695)",
            "cal-bg-emphasis": "oklch(0.205 0.042 264.695)",
          },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 right-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
        <nav className="container mx-auto flex items-center py-4 px-6">
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-white hover:bg-white/10 font-medium transition-all duration-200"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
        </nav>
      </header>

      <main className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Schedule a Meeting
            </h1>
            <p className="text-slate-400">
              ご都合の良い日時をお選びください
            </p>
          </div>

          <Cal
            calLink="ruribou/meeting"
            className="w-full overflow-hidden"
            config={{
              layout: "month_view",
              theme: "dark",
            }}
          />
        </div>
      </main>
    </div>
  );
}
