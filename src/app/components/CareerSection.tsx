import { FaGraduationCap } from "react-icons/fa";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { ExternalLink } from "lucide-react";

const careerData = [
  {
    period: "2022 / 4 - present",
    title: "学生",
    organization: "東京電機大学",
    description:
      "IoE/M2Mソリューション研究室に所属。音声インターフェイスとRAGを用いた案内型システムの開発を行っています。",
    icon: <FaGraduationCap className="w-5 h-5" />,
    dotColor: "bg-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-500/10 text-blue-500",
    url: "https://www.kamlab.rd.dendai.ac.jp",
  },
  {
    period: "2024 / 8",
    title: "エンジニアインターン",
    organization: "エキサイトホールディングス株式会社",
    description:
      "学生エンジニアインターン「Boost!」に参加。SaaS事業部でVue.jsからReact.jsでの一部機能のリプレイス業務に携わりました。",
    icon: <FiBriefcase className="w-5 h-5" />,
    dotColor: "bg-orange-400",
    iconBg: "bg-orange-50 dark:bg-orange-500/10 text-orange-500",
  },
  {
    period: "2024 / 9 - present",
    title: "エンジニアインターン",
    organization: "Lovegraph Inc.",
    description:
      "システムの新機能開発・改修を担当。フルスタックに近い立ち回りでプロダクト開発に携わっています。",
    icon: <FiBriefcase className="w-5 h-5" />,
    dotColor: "bg-rose-400",
    iconBg: "bg-rose-50 dark:bg-rose-500/10 text-rose-500",
    url: "https://corporate.lovegraph.me",
  },
  {
    period: "2025 / 4 - present",
    title: "イベント事業本部 関東事業部",
    organization: "NxTEND",
    description: "東京を中心に、関東の学生がラフに話せるエンジニアコミュニティ『Ramble』の運営をしています。事業規模を拡大していくために様々な取り組みをしています。",
    icon: <FiUsers className="w-5 h-5" />,
    dotColor: "bg-violet-400",
    iconBg: "bg-violet-50 dark:bg-violet-500/10 text-violet-500",
    url: "https://www.nxtend.or.jp/",
  },
  {
    period: "2025 / 6 - present",
    title: "メイン会員",
    organization: "CA Tech Lounge",
    description:
      "自主学習が足りないと感じ、インプットを増やすために、CA Tech Lounge というコミュニティに参加しました。",
    icon: <PiBookOpenTextLight className="w-5 h-5" />,
    dotColor: "bg-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500",
    url: "https://www.cyberagent.co.jp/careers/special/students/tech_lounge/",
  },
  {
    period: "2025 / 9",
    title: "エンジニアインターン",
    organization: "DMM.com LLC",
    description:
      "DMM.comのエンジニアサマーインターンの「DMM GUILD」に参加。Golangを中心にフルスタックで横断的にプロダクト開発に携わりました。",
    icon: <FiBriefcase className="w-5 h-5" />,
    dotColor: "bg-gray-400",
    iconBg: "bg-gray-50 dark:bg-gray-500/10 text-gray-500",
    url: "https://dmm-corp.com/recruit/intern/engineer/guild/",
  },
  {
    period: "2026 / 2",
    title: "CA Tech Job",
    organization: "株式会社サイバーエージェント",
    description:
      "サイバーエージェントのゲーム事業部（SGE）の株式会社アプリボットにて1ヶ月間インターンを行った。ドメイン駆動設計をベースにしたレイヤードアーキテクチャで、Go言語を使用。主にゲームの新機能開発に携わった。",
    icon: <FiBriefcase className="w-5 h-5" />,
    dotColor: "bg-teal-400",
    iconBg: "bg-teal-50 dark:bg-teal-500/10 text-teal-500",
    url: "https://www.cyberagent.co.jp/careers/students/event/detail/id=32004",
  },
];

const CareerSection = () => (
  <section id="career" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-white dark:bg-[#141422]" />

    <div className="bokeh-container">
      <div className="bokeh w-48 h-48 bg-violet-300/15 dark:bg-violet-500/10 top-[15%] left-[3%]" style={{ animationDelay: "2s" }} />
      <div className="bokeh w-40 h-40 bg-cyan-300/15 dark:bg-cyan-500/10 bottom-[10%] right-[5%]" style={{ animationDelay: "7s" }} />
    </div>

    <div className="container relative z-10 mx-auto px-4">
      <div className="text-center mb-14 animate-reveal-up">
        <p className="text-xs font-mono text-purple-400 mb-2 tracking-wider">$ git log --oneline</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-50">Career</h2>
        <p className="text-gray-400 mt-2 text-sm">これまでの経歴と活動</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line - rainbow prism */}
          <div
            className="absolute left-[19px] top-4 bottom-4 w-[3px] rounded-full hidden md:block animate-line-grow"
            style={{
              background: "linear-gradient(180deg, #64b5f6 0%, #9575cd 30%, #ec407a 50%, #9575cd 70%, #4dd0e1 100%)",
              opacity: 0.4,
            }}
          />

          <div className="space-y-4">
            {careerData.map((item, idx) => (
              <div
                key={idx}
                className={`relative animate-reveal-up delay-${Math.min((idx + 1) * 100, 800)}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-[12px] top-7 w-[17px] h-[17px] rounded-full ${item.dotColor} hidden md:block z-10 ring-4 ring-white dark:ring-[#141422] shadow-sm`} />

                <div className="glass-card rounded-2xl p-5 md:ml-12 rainbow-border-bottom">
                  <div className="flex gap-4">
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 hidden md:flex`}>
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-base font-bold text-gray-800 dark:text-gray-100">{item.title}</h3>
                          <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">{item.organization}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-gray-100 dark:border-white/5 whitespace-nowrap">
                            {item.period}
                          </span>
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-300 dark:text-gray-600 hover:text-purple-400 transition-colors duration-200"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 rainbow-divider" />
  </section>
);

export default CareerSection;
