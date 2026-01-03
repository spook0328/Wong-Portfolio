// src/data/projects.ts

// ════════════════════════════════════════════════════════════════
// 📚 學習重點：數據結構設計
// ════════════════════════════════════════════════════════════════

export interface Project {
  id: number;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  year: string;
  tags: string[];
  link?: string; // 可選：專案連結
  image?: string; // 可選：專案圖片
}

// 為什麼這樣設計？
// 1. title 和 description 都包含中英文
// 2. 不需要兩個文件（projects.en.ts 和 projects.zh.ts）
// 3. 所有數據集中管理，容易維護

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "High School Projects-AR-Enhanced School Website Design",
      zh: "高中專題-結合擴增實境輔助學校網站設計",
    },
    description: {
      en: "This project aimed to help international visitors better understand Waldorf education. We designed a high school website and AR introduction cards, using QR codes and Augmented Reality to enhance the diversity and interactivity of school tours.",
      zh: "專題發想是想設計讓外賓更好的認識華德福，因此製作高中網站及AR介紹卡片，希望透過QR Code及AR等技術方式，提升學校導覽的多樣性與互動。",
    },
    year: "2016",
    tags: ["QRCODE", "AR", "Merge AR"],
    link: "",
  },
  {
    id: 2,
    title: {
      en: "Task Management App",
      zh: "任務管理應用",
    },
    description: {
      en: "A collaborative task management tool with real-time updates and team features.",
      zh: "協作型任務管理工具，具有即時更新和團隊協作功能。",
    },
    year: "2024",
    tags: ["TypeScript", "Express", "WebSocket", "PostgreSQL"],
    link: "https://example.com",
  },
  {
    id: 3,
    title: {
      en: "Weather Dashboard",
      zh: "天氣儀表板",
    },
    description: {
      en: "A beautiful weather application with location-based forecasts and interactive maps.",
      zh: "美觀的天氣應用程式，提供基於位置的預報和互動地圖。",
    },
    year: "2023",
    tags: ["React", "API Integration", "Chart.js"],
    link: "https://example.com",
  },
];

// ════════════════════════════════════════════════════════════════
// 💡 如何使用這些數據？
// ════════════════════════════════════════════════════════════════
//
// 在組件中：
//
// import { projects } from '../data/projects';
// import { useLanguage } from '../contexts/LanguageContext';
//
// function ProjectsList() {
//   const { language } = useLanguage();
//
//   return (
//     <div>
//       {projects.map(project => (
//         <div key={project.id}>
//           <h2>{project.title[language]}</h2>
//           <p>{project.description[language]}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
//
// ════════════════════════════════════════════════════════════════
