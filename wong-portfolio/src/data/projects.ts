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
  media?: Array<{
    type: "image" | "youtube"; // 媒體類型：圖片或 YouTube
    url: string; // 圖片路徑或 YouTube 網址
  }>;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "High School Projects-AR-Enhanced School Website Design",
      zh: "高中專題 - 結合擴增實境輔助學校網站設計",
    },
    description: {
      en: "This project aimed to help international visitors better understand Waldorf education. We designed a high school website and AR introduction cards, using QR codes and Augmented Reality to enhance the diversity and interactivity of school tours.",
      zh: "專題發想是想設計讓外賓更好的認識華德福，因此製作高中網站及AR介紹卡片，希望透過QR Code及AR等技術方式，提升學校導覽的多樣性與互動。",
    },
    year: "2016",
    tags: ["QRCODE", "AR", "Web"],
    media: [{ type: "image", url: "/images/HighSchool/highschoolwork1.png" }],
  },
  {
    id: 2,
    title: {
      en: "Ministry of Science and Technology Project - Digital Educational Game: “Hot Wire”",
      zh: "科技部計畫 - 電流急急棒數位教材",
    },
    description: {
      en: "Developed with Construct 2, this digital science learning material helps upper elementary students understand basic electricity concepts. It assists teachers in explaining electric circuits and electrical principles through interactive gameplay.",
      zh: "使用 Construct 2 製作數位科學教材，協助國小中高年級學生理解電學概念，並輔助教師進行電路與電學原理教學。",
    },
    year: "2018",
    tags: ["Construct 2, Block-based coding"],
    media: [
      { type: "image", url: "/images/Most/MOST1.png" },
      { type: "image", url: "/images/Most/MOST2.png" },
    ],
  },
  {
    id: 3,
    title: {
      en: "Ministry of Science and Technology Project - AR-Based Digital Learning Material: “Hot Wire”",
      zh: "科技部計畫 - 電流急急棒數位AR教材",
    },
    description: {
      en: "3D models were created using Blender and integrated into CoSpaces Cube as an AR learning material. The system helps students assemble a physical “steady hand circuit” with AR guidance.",
      zh: "以 Blender 建立 3D 模型，並結合 CoSpaces Cube 呈現 AR 教材，輔助學生進行實體電流急急棒的組裝。",
    },
    year: "2019",
    tags: ["CoSpaces Cube", "Blender", "AR"],
    media: [{ type: "image", url: "/images/Most/MOSTAR1.png" }],
  },
  {
    id: 4,
    title: {
      en: "Game-Based Learning Course Project - Hero Hong’s Fantasy Adventure",
      zh: "遊戲式教材設計課程作品 - 勇者宏宏的奇幻冒險",
    },
    description: {
      en: "A mathematics learning game developed with Construct 2. Using a simple line-art style and basic arithmetic problems, learners must defeat the Math Demon King to rescue the princess. Players calculate results and choose whether the answer is greater than, less than, or equal to a given value.",
      zh: "以 Construct 2 製作數學數位教材，透過簡單畫風與四則運算題目，讓學習者在遊戲中挑戰數學魔王並救出公主。",
    },
    year: "2019",
    tags: ["Construct 2", "Block-based coding"],
    media: [
      { type: "image", url: "/images/TKU/Hong1.png" },
      { type: "image", url: "/images/TKU/Hong2.png" },
    ],
  },
  {
    id: 5,
    title: {
      en: "Graduation Project - Home Defense",
      zh: "畢業專題 - 家猿保衛戰",
    },
    description: {
      en: "A science-based digital learning game developed with Construct 2. Players control a monkey protagonist who must learn scientific and technological knowledge to protect its homeland and escape threats. The video demonstrates the gameplay and educational content.",
      zh: "以 Construct 2 製作科學數位教材，玩家需學習相關科技知識才能成功通關並保護家園。",
    },
    year: "2020",
    tags: ["Construct 2", "Block-based coding", " JSON"],
    media: [{ type: "youtube", url: "https://youtu.be/94ThqaZx8Js" }],
  },
  {
    id: 6,
    title: {
      en: "CoolEnglish - Learning Mini-Games",
      zh: "教育部酷英 - 家猿保衛戰",
    },
    description: {
      en: "Developed using Construct 3, these mini-games encourage students to learn English through gameplay, enhancing learning motivation. Clicking the project link leads to an introduction video of the game.",
      zh: "以 Construct 3 製作，透過遊戲提升學生學習英文的動機，連結可觀看遊戲介紹影片。",
    },
    year: "2021",
    tags: ["Construct 3", "Block-based coding", "JSON", "DataBase"],
    media: [
      { type: "youtube", url: "https://www.youtube.com/shorts/5ja3kZ12kWU" },
      {
        type: "youtube",
        url: "https://www.youtube.com/shorts/3Sl4sjq3660?feature=share",
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=_klBZJGApbk&feature=youtu.be",
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/shorts/JpabrcH023c?feature=share",
      },
    ],
  },
  {
    id: 7,
    title: {
      en: "Modular Beast",
      zh: "部件獸",
    },
    description: {
      en: "A collaborative laboratory project developed with Unity and Vuforia AR. This project extends the functionality of the Modular Beast board game by allowing players to construct Chinese characters using cards and compete against each other. It provides a fun, interactive, and highly reusable way to learn Chinese through gameplay.",
      zh: "實驗室共同開發作品，使用 Unity 與 Vuforia 製作 AR 圖庫，讓玩家透過卡牌組字並進行對戰，以有趣且可重複組合的方式學習中文。",
    },
    year: "2022",
    tags: ["Unity", "Vuforia", "AR"],
    link: "https://zhchenacademic.wixsite.com/dreambox/theme5",
    media: [
      { type: "image", url: "/images/NTNU/bjs_1.png" },
      { type: "image", url: "/images/NTNU/bjs_2.png" },
      { type: "image", url: "/images/NTNU/bjs_3.png" },
    ],
  },
];
