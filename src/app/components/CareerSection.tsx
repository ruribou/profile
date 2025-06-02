import { FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import { PiBookOpenTextLight } from "react-icons/pi";

const careerData = [
  {
    period: "2022 / 4 - present",
    title: "学生（東京電機大学）",
    description: "IoE/M2Mソリューション研究室に所属。WebARとAIを用いた案内型システムの構築を行っています。",
    icon: <FaGraduationCap className="w-6 h-6" />,
    color: "bg-green-600",
    borderColor: "border-green-500",
    url: "https://www.dendai.ac.jp/"
  },
  {
    period: "2024 / 8 - 2024 / 8",
    title: "エンジニアインターン（エキサイトホールディングス株式会社）",
    description: "学生エンジニアインターン「Boost!」に参加。SaaS事業部でVue.jsからReact.jsでの一部機能のリプレイス業務に携わりました。",
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "bg-pink-600",
    borderColor: "border-pink-500",
  },
  {
    period: "2024 / 9 - present",
    title: "エンジニアインターン（Lovegraph Inc.）",
    description: "システムの新機能開発・改修を担当。フルスタックに近い立ち回りでプロダクト開発に携わっています。",
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "bg-blue-600",
    borderColor: "border-blue-500",
    url: "https://corporate.lovegraph.me"
  },
  {
    period: "2025 / 4 - present",
    title: "NxTEND",
    description: "新規事業推進室にて、地方で地域コミュニティの開拓を行なっています。",
    icon: <FiUsers className="w-6 h-6" />,
    color: "bg-purple-600",
    borderColor: "border-purple-500",
    url: "https://www.nxtend.or.jp/"
  },
  {
    period: "2025 / 6 - present",
    title: "CA Tech Lounge",
    description: "自主学習が足りないと感じ、インプットを増やすために、CA Tech Lounge というコミュニティに参加しました。",
    icon: <PiBookOpenTextLight className="w-6 h-6" />,
    color: "bg-orange-600",
    borderColor: "border-orange-500",
    url: "https://cyberagent.ai/techlounge/"
  },
];

const CareerSection = () => (
  <section id="career" className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
        Career
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {careerData.map((item, idx) => (
          <div 
            key={idx} 
            className={`group bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 border-l-4 ${item.borderColor} overflow-hidden`}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex flex-row md:flex-col items-center gap-3 flex-shrink-0">
                  <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center text-white shadow-sm`}>
                    {item.icon}
                  </div>
                  <div className="bg-blue-50 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-blue-700 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="text-sm font-medium whitespace-nowrap">Visit</span>
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareerSection;