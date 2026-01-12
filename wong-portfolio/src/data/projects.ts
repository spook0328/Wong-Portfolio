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
  links?: Array<{
    type: "website" | "github" | "demo" | "video" | "other";
    url: string;
    label?: {
      en: string;
      zh: string;
    };
  }>;
  media?: Array<{
    type: "image" | "youtube";
    url: string;
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
      zh: "本專題以「提升校園導覽的互動性與國際理解」為核心目標，希望讓外賓能以更直覺且有趣的方式認識華德福教育理念與校園環境。作品內容包含高中官方網站設計，以及搭配使用的擴增實境（AR）介紹卡片。使用者可透過掃描 QR Code 進入 AR 互動內容，進一步了解學校特色、課程精神與校園空間配置。本專題嘗試結合數位設計與新興互動技術，提升校園導覽的多樣性與整體參訪體驗。",
    },
    year: "2016",
    tags: ["QRCODE", "AR", "Web"],
    media: [
      { type: "image", url: "/images/HighSchool/Hsw1.png" },
      { type: "image", url: "/images/HighSchool/Hsw2.png" },
    ],
  },
  {
    id: 2,
    title: {
      en: "Ministry of Science and Technology Project - Digital Educational Game: Hot Wire",
      zh: "科技部計畫 - 電流急急棒數位教材",
    },
    description: {
      en: "Developed with Construct 2, this digital science learning material helps upper elementary students understand basic electricity concepts. It assists teachers in explaining electric circuits and electrical principles through interactive gameplay.",
      zh: "本作品為科技部補助之教育專案，使用 Construct 2 製作互動式數位科學教材，主要對象為國小中高年級學生。教材透過「電流急急棒」的遊戲機制，引導學生理解基礎電學概念，如電路連接、電流流動與基本電路原理，同時也能輔助教師進行課堂教學。本作品著重於將抽象的電學概念轉化為可操作、可體驗的學習內容，以提升學生的學習動機與理解成效。",
    },
    year: "2018",
    tags: ["Construct 2", "Block-based coding"],
    media: [
      { type: "image", url: "/images/Most/Most1.png" },
      { type: "image", url: "/images/Most/Most2.png" },
    ],
  },
  {
    id: 3,
    title: {
      en: "Ministry of Science and Technology Project - AR-Based Digital Learning Material: Hot Wire",
      zh: "科技部計畫 - 電流急急棒數位AR教材",
    },
    description: {
      en: "3D models were created using Blender and integrated into CoSpaces Cube as an AR learning material. The system helps students assemble a physical steady hand circuit with AR guidance.",
      zh: "延續前一年度的數位教材，本專題進一步結合擴增實境技術，發展 AR 版本的電流急急棒學習系統。使用 Blender 建立 3D 模型，並整合至 CoSpaces Cube 平台，讓學生能透過 AR 視覺輔助，進行實體電流急急棒的組裝與操作。透過虛實整合的方式，本教材加強學生對電路結構與操作流程的理解，提升學習的沉浸感與實作體驗。",
    },
    year: "2019",
    tags: ["CoSpaces Cube", "Blender", "AR"],
    media: [{ type: "image", url: "/images/Most/MostAR.png" }],
  },
  {
    id: 4,
    title: {
      en: "Game-Based Learning Course Project - Hero Hong's Fantasy Adventure",
      zh: "遊戲式教材設計課程作品 - 勇者宏宏的奇幻冒險",
    },
    description: {
      en: "A mathematics learning game developed with Construct 2. Using a simple line-art style and basic arithmetic problems, learners must defeat the Math Demon King to rescue the princess. Players calculate results and choose whether the answer is greater than, less than, or equal to a given value.",
      zh: "本作品為遊戲式教材設計課程之成果，使用 Construct 2 製作數學數位學習遊戲。遊戲採用簡易線條風格，結合四則運算題目，學習者需透過正確解題，擊敗數學魔王並完成冒險任務。玩家需判斷運算結果的大小關係（大於、小於或等於），在遊戲進程中反覆練習數學概念，將學習與娛樂結合。",
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
      zh: "本作品為大學畢業專題，使用 Construct 2 製作科學教育導向的數位學習遊戲。遊戲以猴子作為主角，透過關卡設計引導玩家學習相關科技與科學知識，唯有正確理解並應用知識，才能成功通關並保護家園。作品強調以故事情境與任務導向的方式，提升學習者的參與感與學習動機，影片內容為教材展示與操作示範。",
    },
    year: "2020",
    tags: ["Construct 2", "Block-based coding", "JSON"],
    media: [{ type: "youtube", url: "https://youtu.be/94ThqaZx8Js" }],
  },
  {
    id: 6,
    title: {
      en: "CoolEnglish - Learning Mini-Games",
      zh: "教育部酷英 - 英文學習小遊戲",
    },
    description: {
      en: "Developed using Construct 3, these mini-games encourage students to learn English through gameplay, enhancing learning motivation. Clicking the project link leads to an introduction video of the game.",
      zh: "本作品使用 Construct 3 製作一系列英文學習小遊戲，設計目的在於透過遊戲互動提升學生學習英文的動機與專注度。學習者在遊戲過程中接觸英文單字與基本語言概念，減少傳統學習帶來的壓力感。點擊作品連結可觀看遊戲介紹影片，了解實際操作與學習流程。",
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
      zh: "本作品為實驗室共同開發之專案，使用 Unity 與 Vuforia 製作擴增實境（AR）圖庫系統，延伸桌遊《部件獸》的學習應用。玩家可透過卡牌組合中文字，並進行對戰與互動，將語文學習融入遊戲機制之中。本專案以「趣味性」、「高度重複組合性」為核心設計理念，提供一種兼具學習與娛樂的中文學習方式。",
    },
    year: "2022",
    tags: ["Unity", "Vuforia", "AR"],
    links: [
      {
        type: "website",
        url: "https://zhchenacademic.wixsite.com/dreambox/theme5",
      },
    ],
    media: [
      { type: "image", url: "/images/NTNU/bjs1.png" },
      { type: "image", url: "/images/NTNU/bjs2.png" },
      { type: "image", url: "/images/NTNU/bjs3.png" },
    ],
  },
  {
    id: 8,
    title: {
      en: "Coding Games",
      zh: "程式小遊戲",
    },
    description: {
      en: "This collection of mini-games was developed using JavaScript, HTML, and CSS to practice frontend programming and interactive web design. Through implementing game logic and user interactions, I exercised key front-end concepts such as event handling, animation rendering, collision detection, state management, and DOM manipulation. The focus of these projects is to strengthen technical proficiency while creating responsive and engaging gameplay experiences.",
      zh: "本系列小型遊戲以 JavaScript、HTML 與 CSS 實作，主要目的在於練習前端程式開發流程與互動式網頁設計。透過遊戲機制實作事件監聽、動畫渲染、碰撞判定、狀態管理與 DOM 操控等核心技術，強化了我在前端技術上的理解與實作能力。作品著重於程式邏輯與遊戲互動體驗，並兼顧操作流暢度與畫面呈現。",
    },
    year: "2024",
    tags: ["Javascript", "HTML", "CSS"],
    links: [
      {
        type: "github",
        url: "https://github.com/spook0328/Codelearning",
      },
    ],
    media: [
      { type: "image", url: "/images/Codelearning/game1.jpg" },
      { type: "image", url: "/images/Codelearning/game2.jpg" },
    ],
  },
  {
    id: 9,
    title: {
      en: "Java Assignment - Employee Payroll Management System",
      zh: "Java 作業 - 員工薪資管理系統",
    },
    description: {
      en: "A Java & JavaFX-based payroll management system developed by a four-member team. The system adopts a modular architecture separating UI, data models, payroll logic, and data storage. It supports employee management, payroll calculation, report generation, and financial visualization through an intuitive desktop interface.",
      zh: "以 Java 與 JavaFX 製作的薪資管理系統，由四人團隊合作開發。系統採模組化架構分離介面、資料模型、薪資邏輯與資料儲存，支援員工管理、薪資計算、報表分析與財務視覺化，操作介面直覺易用。",
    },
    year: "2025",
    tags: ["Java", "JavaFX", "CSS", "HTML"],
    links: [
      {
        type: "github",
        url: "https://github.com/spook0328/COMP2130-Assignment2-Fall2025",
      },
    ],
    media: [
      { type: "image", url: "/images/GBC/Java/Javaa21.png" },
      { type: "image", url: "/images/GBC/Java/Javaa22.png" },
      { type: "image", url: "/images/GBC/Java/Javaa23.png" },
    ],
  },
  {
    id: 10,
    title: {
      en: "ASP.NET Assignment",
      zh: "ASP.NET 作業",
    },
    description: {
      en: "A practice web application built with ASP.NET as part of COMP2139 coursework. The project focuses on learning server-side development, MVC patterns, and basic web CRUD operations.",
      zh: "COMP2139 課程中的 ASP.NET 網站練習專案，主要學習後端開發、MVC 架構與基本 CRUD 網站功能實作。",
    },
    year: "2025",
    tags: ["ASP.NET", "MVC", "Front-end", "Database", "PostgreSQL"],
    links: [
      {
        type: "github",
        url: "https://github.com/spook0328/COMP2139-F2025",
      },
    ],
    media: [
      { type: "image", url: "/images/GBC/Aspnet/Asp1.png" },
      { type: "image", url: "/images/GBC/Aspnet/Asp2.png" },
      { type: "image", url: "/images/GBC/Aspnet/Asp3.png" },
      { type: "image", url: "/images/GBC/Aspnet/Asp4.png" },
    ],
  },
];
