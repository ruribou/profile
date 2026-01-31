import { FiMapPin } from "react-icons/fi";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    {/* Background with gradient mesh */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

    <div className="container relative z-10 mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Avatar */}
        <div>
          <Avatar className="w-36 h-36 mx-auto ring-4 ring-white/10 shadow-2xl shadow-violet-500/20">
            <AvatarImage src="/images/IMG_8792.PNG" alt="Ryota Asai" className="object-cover" />
            <AvatarFallback className="text-3xl bg-slate-800 text-white">RA</AvatarFallback>
          </Avatar>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            ruribou
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-400">
            Ryota Asai
          </h2>
        </div>

        {/* Location & Role */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <FiMapPin className="w-4 h-4" />
            <span className="text-sm font-medium">神奈川県相模原市</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Badge variant="secondary" className="bg-white/5 text-white border border-white/10 hover:bg-white/10 px-4 py-1.5">
              学生
            </Badge>
            <Badge variant="secondary" className="bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-white border border-white/10 hover:from-violet-500/30 hover:to-cyan-500/30 px-4 py-1.5">
              ソフトウェアエンジニア
            </Badge>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed max-w-lg mx-auto">
            埼玉の山奥で大学生をしています。
            技術コミュニティの運営、NPO法人の運営もしています。
          </p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            <span className="text-white font-medium border-b border-violet-400/50">技術は目的ではなく、手段である</span>
            ということを大切にしています。
          </p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            趣味はアイドルマスター、写真撮影、プロ野球観戦などです。
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;
