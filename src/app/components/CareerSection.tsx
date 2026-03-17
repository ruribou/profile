import { ExternalLink } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getIcon } from "@/lib/icons";
import type { Career } from "@/lib/types";

const CareerSection = async () => {
  const { data: careerData } = await supabase
    .from("careers")
    .select("*")
    .order("sort_order", { ascending: true })
    .returns<Career[]>();

  if (!careerData) return null;

  return (
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
                  key={item.id}
                  className={`relative animate-reveal-up delay-${Math.min((idx + 1) * 100, 800)}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[12px] top-7 w-[17px] h-[17px] rounded-full ${item.dot_color} hidden md:block z-10 ring-4 ring-white dark:ring-[#141422] shadow-sm`} />

                  <div className="glass-card rounded-2xl p-5 md:ml-12 rainbow-border-bottom">
                    <div className="flex gap-4">
                      <div className={`w-11 h-11 rounded-xl ${item.icon_bg} flex items-center justify-center flex-shrink-0 hidden md:flex`}>
                        {getIcon(item.icon_name, "w-5 h-5")}
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
};

export default CareerSection;
