import { GraduationCap, Briefcase, Users, BookOpenText } from "lucide-react";

const careerData = [
  {
    period: "2022 / 4 - present",
    title: "学生 (東京電機大学)",
    description: "IoE/M2Mソリューション研究室に所属。WebARとAIを用いた案内型システムの構築を行っています。",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-green-700"
  },
  {
    period: "2022 / 8",
    title: "エンジニアインターン（エキサイトホールディングス株式会社）",
    description: "学生エンジニアインターン「Boost!」に参加。SaaS事業部でVue.jsからReact.jsでの一部機能のリプレイス業務に携わった。",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-pink-700"
  },
  {
    period: "2024 / 9 - present",
    title: "エンジニアインターン（Lovegraph Inc.）",
    description: "システムの新機能開発・改修を担当。フルスタックに近い立ち回りでプロダクト開発に貢献。",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-pink-700"
  },
  {
    period: "2025 / 4 - present",
    title: "NxTEND",
    description: "新規事業推進室にて、未開拓の地方の地域コミュニティの開拓を行なっています。",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-700"
  },
  {
    period: "2025 / 4 - present",
    title: "CA Tech Lounge",
    description: "自主学習が足りないと感じ、インプットを増やすために、CA Tech Loungeというコミュニティに参加しました。",
    icon: <BookOpenText className="w-6 h-6" />,
    color: "bg-yellow-700"
  },
];

const CareerSection = () => (
  <section id="career" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
        Career
      </h2>
      <ol className="relative border-l-4 border-blue-700 max-w-3xl mx-auto">
        {careerData.map((item, idx) => (
          <li key={idx} className="mb-10 ml-6">
            <span className={`absolute -left-5 flex items-center justify-center w-10 h-10 ${item.color} rounded-full ring-8 ring-blue-50 text-white`}>
              {item.icon}
            </span>
            <div className="pl-8">
              <h3 className="text-xl font-semibold text-blue-900">
                {item.period}
              </h3>
              <p className="text-lg font-medium mb-1">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default CareerSection; 