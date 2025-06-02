import React from "react";
import { SiC, SiGo, SiRuby, SiRubyonrails, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, SiRedis, SiDocker, SiAmazon, SiCloudflare, SiVuedotjs, SiSass, SiJavascript, SiPython } from "react-icons/si";

const skillsData = [
  {
    category: "Language",
    skills: [
      { name: "Ruby", icon: <SiRuby className="text-red-500 w-7 h-7" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 w-6 h-6" /> },
      { name: "Python", icon: <SiPython className="text-blue-500 w-6 h-6" /> },
      { name: "Go", icon: <SiGo className="text-cyan-500 w-7 h-7" /> },
      { name: "C", icon: <SiC className="text-gray-500 w-6 h-6" /> },
    ],
  },
  {
    category: "Framework/Library",
    skills: [
      { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-500 w-7 h-7" /> },
      { name: "React", icon: <SiReact className="text-sky-400 w-6 h-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black w-6 h-6" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-500 w-6 h-6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 w-6 h-6" /> },
      { name: "SCSS", icon: <SiSass className="text-pink-500 w-6 h-6" /> },
    ],
  },
  {
    category: "Database/Tools",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-700 w-6 h-6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800 w-6 h-6" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400 w-6 h-6" /> },
      { name: "AWS", icon: <SiAmazon className="text-yellow-500 w-6 h-6" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="text-orange-400 w-6 h-6" /> },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-gradient-to-b from-blue-200 via-blue-100 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {skillsData.map((cat) => (
          <div
            key={cat.category}
            className="relative p-8 bg-white/80 backdrop-filter backdrop-blur-lg border border-blue-100 rounded-2xl shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold ml-3">{cat.category}</h3>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              {cat.skills.map((skill) => (
                <span key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-white/80 border border-blue-200 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 hover:text-blue-900 hover:border-blue-300 transition-colors duration-200">
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