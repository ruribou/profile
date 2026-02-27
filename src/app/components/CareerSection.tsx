import { FaGraduationCap } from "react-icons/fa";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const careerData = [
  {
    period: "2022 / 4 - present",
    title: "学生",
    organization: "東京電機大学",
    description:
      "IoE/M2Mソリューション研究室に所属。音声インターフェイスとRAGを用いた案内型システムの開発を行っています。",
    icon: <FaGraduationCap className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-500",
    url: "https://www.kamlab.rd.dendai.ac.jp",
  },
  {
    period: "2024 / 8",
    title: "エンジニアインターン",
    organization: "エキサイトホールディングス株式会社",
    description:
      "学生エンジニアインターン「Boost!」に参加。SaaS事業部でVue.jsからReact.jsでの一部機能のリプレイス業務に携わりました。",
    icon: <FiBriefcase className="w-5 h-5" />,
    gradient: "from-red-500 to-orange-500",
  },
  {
    period: "2024 / 9 - present",
    title: "エンジニアインターン",
    organization: "Lovegraph Inc.",
    description:
      "システムの新機能開発・改修を担当。フルスタックに近い立ち回りでプロダクト開発に携わっています。",
    icon: <FiBriefcase className="w-5 h-5" />,
    gradient: "from-pink-500 to-rose-500",
    url: "https://corporate.lovegraph.me",
  },
  {
    period: "2025 / 4 - present",
    title: "イベント事業本部 関東事業部",
    organization: "NxTEND",
    description: "地方で地域コミュニティの開拓を行なっています。",
    icon: <FiUsers className="w-5 h-5" />,
    gradient: "from-violet-500 to-purple-500",
    url: "https://www.nxtend.or.jp/",
  },
  {
    period: "2025 / 6 - present",
    title: "メイン会員",
    organization: "CA Tech Lounge",
    description:
      "自主学習が足りないと感じ、インプットを増やすために、CA Tech Lounge というコミュニティに参加しました。",
    icon: <PiBookOpenTextLight className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-500",
    url: "https://www.cyberagent.co.jp/careers/special/students/tech_lounge/",
  },
  {
    period: "2025 / 9",
    title: "エンジニアインターン",
    organization: "DMM.com LLC",
    description:
      "DMM.comのエンジニアサマーインターンの「DMM GUILD」に参加。Golangを中心にフルスタックで横断的にプロダクト開発に携わりました。",
    icon: <FiBriefcase className="w-5 h-5" />,
    gradient: "from-slate-600 to-slate-500",
    url: "https://dmm-corp.com/recruit/intern/engineer/guild/",
  },
  {
    period: "2026 / 2",
    title: "CA Tech Job",
    organization: "株式会社サイバーエージェント",
    description:
      "サイバーエージェントのゲーム事業部（SGE）の株式会社アプリボットにて1ヶ月間インターンを行った。ドメイン駆動設計をベースにしたレイヤードアーキテクチャで、Go言語を使用。主にゲームの新機能開発に携わった。",
    icon: <FiBriefcase className="w-5 h-5" />,
    gradient: "from-orange-500 to-amber-500",
    url: "https://www.cyberagent.co.jp/careers/students/event/detail/id=32004",
  },
];

const CareerSection = () => (
  <section id="career" className="py-24 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-slate-950" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Career</h2>
        <p className="text-slate-400 max-w-md mx-auto">これまでの経歴と活動</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/50 to-transparent hidden md:block" />

          <div className="space-y-6">
            {careerData.map((item, idx) => (
              <Card
                key={idx}
                className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 hidden md:block">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-slate-300 font-medium">{item.organization}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-300 border border-slate-600/50 whitespace-nowrap"
                          >
                            {item.period}
                          </Badge>
                          {item.url && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-slate-400 hover:text-white hover:bg-white/10 h-8 w-8"
                              asChild
                            >
                              <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CareerSection;
