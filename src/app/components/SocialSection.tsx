"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getIcon } from "@/lib/icons";
import type { SocialLink } from "@/lib/types";

const SocialSection = ({ socialData }: { socialData: SocialLink[] }) => {
  const [decodedHandles, setDecodedHandles] = useState<Record<string, string>>({});

  useEffect(() => {
    const decoded: Record<string, string> = {};
    for (const item of socialData) {
      if (item.link_type === "email") {
        decoded[item.id] = atob(item.handle);
      }
    }
    setDecodedHandles(decoded);
  }, [socialData]);

  const resolvedData = useMemo(
    () =>
      socialData.map((item) => {
        if (item.link_type === "email") {
          const email = decodedHandles[item.id] || "Email";
          return { ...item, handle: email, url: email ? `mailto:${email}` : "#" };
        }
        return item;
      }),
    [socialData, decodedHandles],
  );

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
          {resolvedData.map((contact, idx) => {
            const inner = (
              <div className={`glass-card rounded-2xl p-4 rainbow-border-bottom animate-reveal-up delay-${Math.min((idx + 1) * 100, 800)}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${contact.icon_bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    {getIcon(contact.icon_name, "w-4 h-4")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100">{contact.platform}</h3>
                      {contact.link_type !== "internal" && (
                        <ExternalLink className="w-3 h-3 text-gray-300 dark:text-gray-600 group-hover:text-purple-400 transition-colors" />
                      )}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{contact.handle}</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">{contact.description}</p>
                  </div>
                </div>
              </div>
            );

            return contact.link_type === "internal" ? (
              <Link key={contact.id} href={contact.url} className="block group">
                {inner}
              </Link>
            ) : (
              <a key={contact.id} href={contact.url} target="_blank" rel="noopener noreferrer" className="block group">
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
