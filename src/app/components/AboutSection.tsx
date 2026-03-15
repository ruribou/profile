import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { CalendarDays, Sparkles } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#eef2ff] via-white to-[#fafafa] dark:from-[#0f0f1a] dark:via-[#141422] dark:to-[#16162a]" />

    {/* Prism light streaks */}
    <div className="prism-streaks" />

    {/* Bokeh */}
    <div className="bokeh-container">
      <div className="bokeh w-52 h-52 bg-blue-300/30 dark:bg-blue-500/30 top-[10%] left-[5%]" style={{ animationDelay: "0s" }} />
      <div className="bokeh w-40 h-40 bg-purple-300/25 dark:bg-purple-500/30 top-[15%] right-[10%]" style={{ animationDelay: "2s" }} />
      <div className="bokeh w-36 h-36 bg-pink-300/20 dark:bg-pink-500/20 bottom-[20%] left-[15%]" style={{ animationDelay: "4s" }} />
      <div className="bokeh w-44 h-44 bg-cyan-300/25 dark:bg-cyan-500/20 bottom-[10%] right-[5%]" style={{ animationDelay: "6s" }} />
      <div className="bokeh w-28 h-28 bg-amber-300/20 dark:bg-amber-500/20 top-[45%] left-[45%]" style={{ animationDelay: "3s" }} />
    </div>

    <div className="container relative z-10 mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left - Avatar */}
        <div className="flex-shrink-0 animate-reveal-up">
          <div className="relative">
            <Avatar className="w-40 h-40 md:w-48 md:h-48 shadow-2xl shadow-purple-200/30 dark:shadow-purple-900/30">
              <AvatarImage src="/images/IMG_8792.PNG" alt="Ryota Asai" className="object-cover" />
              <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-purple-600 dark:text-purple-300 font-bold">RA</AvatarFallback>
            </Avatar>
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 opacity-25 dark:opacity-20 blur-md -z-10 animate-float" />
          </div>
        </div>

        {/* Right - Info */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <div className="animate-reveal-up delay-100">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 tracking-wider uppercase">Software Engineer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-800 dark:text-gray-50 leading-tight">
              ruribou
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm tracking-widest uppercase mt-1">Ryota Asai</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3 animate-reveal-up delay-200">
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
              <FiMapPin className="w-3.5 h-3.5" />
              <span className="text-sm">神奈川県相模原市</span>
            </div>
            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                大学院生
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20">
                ソフトウェアエンジニア
              </span>
            </div>
          </div>

          <div className="space-y-2.5 animate-reveal-up delay-300">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              埼玉の山奥で大学生をしています。<br className="hidden md:block" />
              技術コミュニティの運営、NPO法人の運営もしています。
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              <span className="text-gray-800 dark:text-gray-100 font-bold border-b-2 border-purple-300 dark:border-purple-500 pb-0.5">
                技術は目的ではなく、手段である
              </span>
              ということを大切にしています。
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              趣味はアイドルマスター、写真撮影、プロ野球観戦などです。
            </p>
          </div>

          <div className="animate-reveal-up delay-400">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg bg-purple-500 hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-200/40 dark:hover:shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarDays className="w-4 h-4" />
              ミーティングを予約する
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 rainbow-divider" />
  </section>
);

export default AboutSection;
