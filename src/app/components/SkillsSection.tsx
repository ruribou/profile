import { supabase } from "@/lib/supabase";
import { getIcon } from "@/lib/icons";
import type { Skill } from "@/lib/types";

const SkillsSection = async () => {
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("category_sort_order", { ascending: true })
    .order("sort_order", { ascending: true })
    .returns<Skill[]>();

  if (!skills) return null;

  // Group skills by category
  const categories = skills.reduce<
    { category: string; categoryIcon: string; categoryIconColor: string; skills: Skill[] }[]
  >((acc, skill) => {
    let group = acc.find((g) => g.category === skill.category);
    if (!group) {
      group = {
        category: skill.category,
        categoryIcon: skill.category_icon,
        categoryIconColor: skill.category_icon_color,
        skills: [],
      };
      acc.push(group);
    }
    group.skills.push(skill);
    return acc;
  }, []);

  return (
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
          {categories.map((cat, idx) => (
            <div
              key={cat.category}
              className={`glass-card rounded-2xl p-6 rainbow-border-bottom animate-reveal-up delay-${(idx + 1) * 200}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl ${cat.categoryIconColor} flex items-center justify-center`}>
                  {getIcon(cat.categoryIcon, "w-4 h-4")}
                </div>
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 tracking-wide">{cat.category}</h3>
              </div>

              <div className="space-y-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/80 dark:hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <span className={`${skill.icon_color} text-lg group-hover:scale-110 transition-transform duration-200`}>
                      {getIcon(skill.icon_name)}
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
};

export default SkillsSection;
