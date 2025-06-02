import React from "react";
import { Code, Database, Palette, Server, Smartphone, Globe } from "lucide-react";

const skillsData = [
  {
    category: "フロントエンド開発",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    description: "モダンなフロントエンド技術を使用したレスポンシブなWeb開発"
  },
  {
    category: "バックエンド開発", 
    icon: <Server className="w-8 h-8 text-blue-600" />,
    skills: ["Node.js", "Python", "Go", "Ruby on Rails"],
    description: "スケーラブルなAPIとサーバーサイドアプリケーションの構築"
  },
  {
    category: "データベース・インフラ",
    icon: <Database className="w-8 h-8 text-blue-600" />,
    skills: ["MySQL", "PostgreSQL", "Redis", "Docker", "AWS"],
    description: "効率的なデータ管理とクラウドインフラストラクチャ"
  }
];

const SkillsSection = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">スキル</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.category} className="p-6 bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <div className="flex items-center mb-4">
              {skillCategory.icon}
              <h3 className="text-xl font-semibold ml-3">{skillCategory.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {skillCategory.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              {skillCategory.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;