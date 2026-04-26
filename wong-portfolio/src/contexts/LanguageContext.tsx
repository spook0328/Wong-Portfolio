// src/contexts/LanguageContext.tsx

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

//📚 學習重點 1：什麼是 Context？
// // Context 就像一個「全局變數倉庫」
// 任何組件都可以訪問，不需要一層層傳遞 props

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
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
      "Hi, I’m Eric Wong, a front-end developer and web designer with an academic background in Educational Technology and Interactive Learning Systems.",
    "about.description":
      "Over the past few years, I've been involved in multiple educational technology projects, ranging from interactive game development and experimental system design to data analysis and cross-disciplinary collaboration. These experiences deepened my understanding of transforming technical concepts into practical, user-friendly solutions. Currently, I'm focusing on web development and front-end technologies, working with React, JavaScript, HTML, and CSS. I enjoy turning complex ideas into intuitive, elegant interfaces while continuously expanding my full-stack development skills. I look forward to contributing to projects that integrate technology, design, and user experience to create meaningful impact.",
    "about.skills": "Skills",
    "about.programming": "Programming",
    "about.frontend": "Frontend",
    "about.backend": "Backend",
    "about.database": "Database",
    "about.tools": "Tools",
    "about.STEM & Educational": "STEM & Educational",

    "projects.title": "Projects ",
  },
  zh: {
    "nav.home": "首頁",
    "nav.about": "關於",
    "nav.projects": "作品集",
    "nav.logo.subtitle": "Developer",

    "home.description":
      "深耕於程式及教育，用簡潔程式碼和直觀設計打造新的數位體驗。",

    "about.title": "關於我",
    "about.intro": "嗨，我是 翁睿昕，網頁設計與開發者。",
    "about.description":
      "過去幾年，我參與了多項教育科技專案，從互動遊戲開發、實驗系統設計到資料分析與跨領域協作。這些經驗讓我深入理解如何將技術轉化為實用且易於理解的解決方案。目前我專注於網頁開發與前端技術的學習，使用 React、JavaScript、HTML、CSS 進行開發。我享受將複雜概念轉換成直覺、易用且美觀的介面，並持續精進全端開發與系統架構能力。期待參與更多結合科技、設計與使用者體驗的專案，創造實質價值。",
    "about.skills": "技能",
    "about.programming": "程式語言",
    "about.frontend": "前端",
    "about.backend": "後端",
    "about.database": "資料庫",
    "about.tools": "工具",
    "about.STEM & Educational": "STEM & Educational",

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
