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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Database } from "lucide-react";

const skillsData = [
  {
    category: "Language",
    icon: <Code className="w-5 h-5" />,
    gradient: "from-violet-500 to-purple-500",
    skills: [
      { name: "Ruby", icon: <SiRuby className="text-red-400 w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400 w-5 h-5" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-5 h-5" /> },
      { name: "Python", icon: <SiPython className="text-cyan-400 w-5 h-5" /> },
      { name: "Go", icon: <SiGo className="text-cyan-300 w-5 h-5" /> },
      { name: "C", icon: <SiC className="text-slate-400 w-5 h-5" /> },
    ],
  },
  {
    category: "Framework / Library",
    icon: <Layers className="w-5 h-5" />,
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Ruby on Rails", icon: <SiRubyonrails className="text-red-400 w-5 h-5" /> },
      { name: "React", icon: <SiReact className="text-cyan-400 w-5 h-5" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white w-5 h-5" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-400 w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 w-5 h-5" /> },
      { name: "SCSS", icon: <SiSass className="text-pink-400 w-5 h-5" /> },
    ],
  },
  {
    category: "Database / Tools",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-500",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400 w-5 h-5" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300 w-5 h-5" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400 w-5 h-5" /> },
      { name: "AWS", icon: <SiAmazon className="text-orange-400 w-5 h-5" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="text-orange-400 w-5 h-5" /> },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-slate-900" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          日々の開発で使用している技術スタック
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillsData.map((cat, idx) => (
          <Card
            key={cat.category}
            className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-white">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.gradient} text-white`}>
                  {cat.icon}
                </div>
                <span className="text-lg">{cat.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="bg-slate-700/50 hover:bg-slate-700 text-slate-200 border border-slate-600/50 px-3 py-1.5 flex items-center gap-2 transition-all duration-200"
                  >
                    {skill.icon}
                    <span className="text-sm">{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
