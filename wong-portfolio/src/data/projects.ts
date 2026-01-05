// src/data/projects.ts
// ✅ 直接用這個文件替換你現有的 projects.ts

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
  link?: string;
  images?: string[]; // 圖片陣列（支援多張圖片）
}

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
    // ✅ 把你的圖片路徑放在這裡（記得改成你的實際路徑）
    images: [
      "/images/HighSchool/highschoolwork1.png",
      "/images/HighSchool/highschoolwork2.png",
    ],
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
    images: [
      "/images/task-app/screenshot1.png",
      "/images/task-app/screenshot2.png",
    ],
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
    images: ["/images/weather/screenshot1.png"],
  },
];

// ════════════════════════════════════════════════════════════════
// 📝 使用說明
// ════════════════════════════════════════════════════════════════
//
// 1. 把你的圖片放在 public/images/ 文件夾
// 2. 路徑格式："/images/資料夾名稱/檔案名稱.png"
// 3. 可以有多張圖片，也可以只有一張
// 4. 如果沒有圖片，就不要寫 images 這行
//
// ════════════════════════════════════════════════════════════════
