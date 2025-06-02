import React from "react";
import { SiGo, SiRubyonrails, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, SiRedis, SiDocker, SiAmazon, SiCloudflare, SiVuedotjs, SiSass } from "react-icons/si";
import { Server, Globe, Database } from "lucide-react";

const skillsData = [
  {
    category: "バックエンド開発",
    icon: <Server className="w-8 h-8 text-blue-600" />,
    skills: [
      { name: "Go", icon: <SiGo className="text-cyan-500 w-7 h-7" /> },
      { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-500 w-7 h-7" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700 w-6 h-6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800 w-6 h-6" /> },
    ],
    highlight: true,
  },
  {
    category: "フロントエンド開発",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    skills: [
      { name: "React", icon: <SiReact className="text-sky-400 w-6 h-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black w-6 h-6" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-500 w-6 h-6" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 w-6 h-6" /> },
      { name: "SCSS", icon: <SiSass className="text-pink-500 w-6 h-6" /> },
    ],
  },
  {
    category: "その他ツール",
    icon: <Database className="w-8 h-8 text-blue-600" />,
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-400 w-6 h-6" /> },
      { name: "AWS", icon: <SiAmazon className="text-yellow-500 w-6 h-6" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="text-orange-400 w-6 h-6" /> },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((cat) => (
          <div
            key={cat.category}
            className={`p-6 bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 ${
              cat.highlight ? "ring-2 ring-blue-400 scale-105" : ""
            }`}
          >
            <div className="flex items-center mb-4">
              {cat.icon}
              <h3 className="text-xl font-semibold ml-3">{cat.category}</h3>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              {cat.skills.map((skill) => (
                <span key={skill.name} className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;