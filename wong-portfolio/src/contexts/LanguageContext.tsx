// src/contexts/LanguageContext.tsx

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// ════════════════════════════════════════════════════════════════
// 📚 學習重點 1：什麼是 Context？
// ════════════════════════════════════════════════════════════════
// Context 就像一個「全局變數倉庫」
// 任何組件都可以訪問，不需要一層層傳遞 props

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// 翻譯字典
const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.logo.subtitle": "Developer",

    "home.description":
      "Building digital experiences with clean code and thoughtful design.",

    "about.title": "About Me",
    "about.intro":
      "Hi, I'm Eric Wong, a passionate full-stack developer focused on creating clean, efficient, and user-friendly digital experiences.",
    "about.description":
      "I specialize in modern web technologies and enjoy turning complex problems into simple, elegant solutions.",
    "about.skills": "Skills",
    "about.frontend": "Frontend",
    "about.backend": "Backend",
    "about.database": "Database",
    "about.tools": "Tools",

    "projects.title": "Selected Works",
  },
  zh: {
    "nav.home": "首頁",
    "nav.about": "關於",
    "nav.projects": "作品集",
    "nav.logo.subtitle": "Developer",

    "home.description":
      "深耕於程式及教育，用簡潔程式碼和直觀設計打造新的數位體驗。",

    "about.title": "關於我",
    "about.intro": "嗨，我是 翁睿昕，一位熱衷於網頁設計的開發者。",
    "about.description":
      "熟悉現代網頁技術，享受將複雜問題轉化為簡單、優雅解決方案的過程。",
    "about.skills": "技能",
    "about.frontend": "前端",
    "about.backend": "後端",
    "about.database": "資料庫",
    "about.tools": "工具",

    "projects.title": "精選作品",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return saved === "en" || saved === "zh" ? saved : "zh";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
