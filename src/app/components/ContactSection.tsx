import React from "react";
import { ExternalLink, Mail } from "lucide-react";
import { SiX, SiGithub, SiQiita, SiZenn } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const contactData = [
  {
    platform: "Email",
    handle: "ruribou.dev@gmail.com",
    url: "mailto:ruribou.dev@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    description: "ご連絡やご相談はこちら",
    gradient: "from-red-500 to-rose-500",
  },
  {
    platform: "X",
    handle: "@ruribou_swe",
    url: "https://x.com/ruribou_swe",
    icon: <SiX className="w-5 h-5" />,
    description: "日々の活動について発信・DMも歓迎",
    gradient: "from-slate-600 to-slate-500",
  },
  {
    platform: "GitHub",
    handle: "@ruribou",
    url: "https://github.com/ruribou",
    icon: <SiGithub className="w-5 h-5" />,
    description: "公開しているコード",
    gradient: "from-slate-700 to-slate-600",
  },
  {
    platform: "Qiita",
    handle: "@ruribou",
    url: "https://qiita.com/ruribou",
    icon: <SiQiita className="w-5 h-5" />,
    description: "技術記事や個人的なアウトプット",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    platform: "Zenn",
    handle: "@eng_ryosan",
    url: "https://zenn.dev/eng_ryosan",
    icon: <SiZenn className="w-5 h-5" />,
    description: "組織でのアウトプットや活動記録",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-slate-900" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h2>
        <p className="text-slate-400 max-w-md mx-auto">お気軽にご連絡ください</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="grid gap-4">
          {contactData.map((contact) => (
            <a
              key={contact.platform}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-lg font-semibold text-white">{contact.platform}</h3>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-400 transition-colors" />
                      </div>
                      <p className="text-violet-400 font-medium text-sm mb-0.5">{contact.handle}</p>
                      <p className="text-slate-500 text-sm">{contact.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
