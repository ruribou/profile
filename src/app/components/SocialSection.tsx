"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, CalendarDays, Mail, Feather } from "lucide-react";
import { SiX, SiGithub, SiQiita, SiZenn } from "react-icons/si";

const ENCODED_EMAIL = "Y29udGFjdEBydXJpYm91LmNvbQ==";

const socialData = [
  {
    platform: "X",
    handle: "@ruribou_swe",
    url: "https://x.com/ruribou_swe",
    icon: <SiX className="w-4 h-4" />,
    description: "日々の活動について発信・DMも歓迎",
    iconBg: "bg-gray-50 dark:bg-gray-500/10 text-gray-700 dark:text-gray-300",
  },
  {
    platform: "GitHub",
    handle: "@ruribou",
    url: "https://github.com/ruribou",
    icon: <SiGithub className="w-4 h-4" />,
    description: "公開しているコード",
    iconBg: "bg-gray-50 dark:bg-gray-500/10 text-gray-700 dark:text-gray-300",
  },
  {
    platform: "Qiita",
    handle: "@ruribou",
    url: "https://qiita.com/ruribou",
    icon: <SiQiita className="w-4 h-4" />,
    description: "技術記事や個人的なアウトプット",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    platform: "Zenn",
    handle: "@eng_ryosan",
    url: "https://zenn.dev/eng_ryosan",
    icon: <SiZenn className="w-4 h-4" />,
    description: "組織でのアウトプットや活動記録",
    iconBg: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    platform: "しずかなインターネット",
    handle: "@ruribou",
    url: "https://sizu.me/ruribou",
    icon: <Feather className="w-4 h-4" />,
    description: "エッセイや日記",
    iconBg: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

const SocialSection = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(atob(ENCODED_EMAIL));
  }, []);

  const allSocialData = useMemo(() => {
    const emailData = {
      platform: "Email",
      handle: email || "Email",
      url: email ? `mailto:${email}` : "#",
      icon: <Mail className="w-4 h-4" />,
      description: "ご連絡やご相談はこちら",
      iconBg: "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400",
    };
    const bookingData = {
      platform: "Booking",
      handle: "日程調整",
      url: "/booking",
      icon: <CalendarDays className="w-4 h-4" />,
      description: "ミーティングのご予約はこちら",
      iconBg: "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400",
      internal: true,
    };
    return [emailData, bookingData, ...socialData];
  }, [email]);

  return (
    <section id="social" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#12121f]" />

      <div className="bokeh-container">
        <div className="bokeh w-48 h-48 bg-pink-300/15 dark:bg-pink-500/10 top-[10%] right-[5%]" style={{ animationDelay: "3s" }} />
        <div className="bokeh w-40 h-40 bg-blue-300/15 dark:bg-blue-500/10 bottom-[15%] left-[8%]" style={{ animationDelay: "8s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-14 animate-reveal-up">
          <p className="text-xs font-mono text-purple-400 mb-2 tracking-wider">$ open links.md</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-50">Social</h2>
          <p className="text-gray-400 mt-2 text-sm">各種リンク・お気軽にご連絡ください</p>
        </div>

        <div className="max-w-2xl mx-auto grid gap-3">
          {allSocialData.map((contact, idx) => {
            const inner = (
              <div className={`glass-card rounded-2xl p-4 rainbow-border-bottom animate-reveal-up delay-${Math.min((idx + 1) * 100, 800)}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${contact.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">{contact.platform}</h3>
                      {"internal" in contact && contact.internal ? null : (
                        <ExternalLink className="w-3 h-3 text-gray-300 dark:text-gray-600 group-hover:text-purple-400 transition-colors" />
                      )}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{contact.handle}</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">{contact.description}</p>
                  </div>
                </div>
              </div>
            );

            return "internal" in contact && contact.internal ? (
              <Link key={contact.platform} href={contact.url} className="block group">
                {inner}
              </Link>
            ) : (
              <a key={contact.platform} href={contact.url} target="_blank" rel="noopener noreferrer" className="block group">
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
