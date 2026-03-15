"use client";

import { useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function applyTheme() {
      const hour = new Date().getHours();
      const isDark = hour >= 18 || hour < 6;
      document.documentElement.classList.toggle("dark", isDark);
    }

    applyTheme();

    // 1分ごとにチェック（時間境界をまたぐ場合）
    const interval = setInterval(applyTheme, 60_000);
    return () => clearInterval(interval);
  }, []);

  return <>{children}</>;
}
