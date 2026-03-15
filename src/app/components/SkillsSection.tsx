import React from "react";
import {
  SiC,
  SiGo,
  SiRuby,
  SiRubyonrails,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiCloudflare,
  SiVuedotjs,
  SiSass,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { Code, Layers, Database } from "lucide-react";

const skillsData = [
  {
    category: "Language",
    icon: <Code className="w-4 h-4" />,
    iconColor: "text-blue-500 bg-blue-50 dark:bg-blue-500/10",
    skills: [
      { name: "Ruby", icon: <SiRuby />, color: "text-red-500" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600 dark:text-blue-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-amber-500" },
      { name: "Python", icon: <SiPython />, color: "text-sky-600 dark:text-sky-400" },
      { name: "Go", icon: <SiGo />, color: "text-cyan-600 dark:text-cyan-400" },
      { name: "C", icon: <SiC />, color: "text-gray-500 dark:text-gray-400" },
    ],
  },
  {
    category: "Framework / Library",
    icon: <Layers className="w-4 h-4" />,
    iconColor: "text-purple-500 bg-purple-50 dark:bg-purple-500/10",
    skills: [
      { name: "Ruby on Rails", icon: <SiRubyonrails />, color: "text-red-500" },
      { name: "React", icon: <SiReact />, color: "text-cyan-500" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800 dark:text-gray-200" },
      { name: "Vue.js", icon: <SiVuedotjs />, color: "text-emerald-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
      { name: "SCSS", icon: <SiSass />, color: "text-pink-500" },
    ],
  },
  {
    category: "Database / Tools",
    icon: <Database className="w-4 h-4" />,
    iconColor: "text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-600 dark:text-blue-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700 dark:text-blue-300" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
      { name: "AWS", icon: <SiAmazon />, color: "text-amber-600 dark:text-amber-400" },
      { name: "Cloudflare", icon: <SiCloudflare />, color: "text-orange-500" },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#12121f]" />

    <div className="bokeh-container">
      <div className="bokeh w-56 h-56 bg-blue-300/20 dark:bg-blue-500/10 top-[10%] right-[5%]" style={{ animationDelay: "1s" }} />
      <div className="bokeh w-44 h-44 bg-purple-300/15 dark:bg-purple-500/10 bottom-[15%] left-[5%]" style={{ animationDelay: "5s" }} />
    </div>

    <div className="container relative z-10 mx-auto px-4">
      <div className="text-center mb-14 animate-reveal-up">
        <p className="text-xs font-mono text-purple-400 mb-2 tracking-wider">$ cat skills.json</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-50">Skills</h2>
        <p className="text-gray-400 mt-2 text-sm">日々の開発で使用している技術スタック</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillsData.map((cat, idx) => (
          <div
            key={cat.category}
            className={`glass-card rounded-2xl p-6 rainbow-border-bottom animate-reveal-up delay-${(idx + 1) * 200}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-9 h-9 rounded-xl ${cat.iconColor} flex items-center justify-center`}>
                {cat.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{cat.category}</h3>
            </div>

            <div className="space-y-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/80 dark:hover:bg-white/5 transition-colors duration-200 group"
                >
                  <span className={`${skill.color} text-lg group-hover:scale-110 transition-transform duration-200`}>
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 rainbow-divider" />
  </section>
);

export default SkillsSection;
