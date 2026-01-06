import { useState } from "react";
import type { Project } from "../../data/projects";
import { useLanguage } from "../../contexts/LanguageContext";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

function getYouTubeVideoId(url: string): string | null {
  // 支援兩種格式：
  // 1. https://youtu.be/VIDEO_ID
  // 2. https://www.youtube.com/watch?v=VIDEO_ID

  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]+)/, // youtu.be 格式
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/, // youtube.com 格式
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  const title = project.title[language];
  const description = project.description[language];

  // 追蹤當前顯示的媒體索引
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // 計算總媒體數量
  const totalMedia = project.media?.length || 0;

  // 上一個媒體
  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalMedia - 1;
      }
      return prevIndex - 1;
    });
  };

  // 下一個媒體
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prevIndex) => {
      if (prevIndex === totalMedia - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // 跳到指定媒體
  const goToMedia = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex(index);
  };

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <article
      className={`project-card ${project.link ? "clickable" : ""}`}
      onClick={handleClick}
    >
      <div className="project-content-wrapper">
        {/* 左側：文字內容 */}
        <div className="project-text-section">
          <div className="project-header">
            <h2 className="project-title">{title}</h2>
            <span className="project-year">{project.year}</span>
          </div>

          <p className="project-description">{description}</p>

          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 右側：媒體輪播（圖片或影片） */}
        {project.media && project.media.length > 0 && (
          <div className="project-carousel-section">
            <div className="carousel-container">
              {/* ══════════════════════════════════════════════════
                  根據媒體類型顯示不同內容
                  ══════════════════════════════════════════════════ */}

              {(() => {
                const currentMedia = project.media![currentMediaIndex];

                if (currentMedia.type === "image") {
                  // 顯示圖片
                  return (
                    <img
                      src={currentMedia.url}
                      alt={`${title} - ${currentMediaIndex + 1}`}
                      className="carousel-image"
                      loading="lazy"
                    />
                  );
                } else if (currentMedia.type === "youtube") {
                  // 顯示 YouTube 影片
                  const videoId = getYouTubeVideoId(currentMedia.url);

                  if (videoId) {
                    return (
                      <iframe
                        className="carousel-video"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`${title} - Video ${currentMediaIndex + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  }
                }

                return null;
              })()}

              {/* 左右箭頭（只在有多個媒體時顯示） */}
              {totalMedia > 1 && (
                <>
                  <button
                    className="carousel-button carousel-button-prev"
                    onClick={goToPrevious}
                    aria-label="Previous media"
                  >
                    ←
                  </button>

                  <button
                    className="carousel-button carousel-button-next"
                    onClick={goToNext}
                    aria-label="Next media"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* 指示點和計數（只在有多個媒體時顯示） */}
            {totalMedia > 1 && (
              <div className="carousel-indicators">
                {project.media.map((media, index) => (
                  <button
                    key={index}
                    className={`indicator-dot ${
                      index === currentMediaIndex ? "active" : ""
                    } ${media.type === "youtube" ? "indicator-video" : ""}`}
                    onClick={(e) => goToMedia(index, e)}
                    aria-label={`Go to ${media.type} ${index + 1}`}
                    title={media.type === "youtube" ? "Video" : "Image"}
                  />
                ))}

                <span className="image-counter">
                  {currentMediaIndex + 1} / {totalMedia}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

// ════════════════════════════════════════════════════════════════
// 🎓 學習要點
// ════════════════════════════════════════════════════════════════
//
// 1. **立即執行函數 (IIFE)**
//    {(() => { ... })()}
//    - 在 JSX 中執行複雜邏輯
//    - 根據條件返回不同的元素
//
// 2. **YouTube 嵌入**
//    <iframe src="https://www.youtube.com/embed/VIDEO_ID" />
//    - 從網址提取 VIDEO_ID
//    - 用 iframe 嵌入播放器
//
// 3. **區分媒體類型**
//    if (media.type === 'image') { 顯示圖片 }
//    else if (media.type === 'youtube') { 顯示影片 }
//
// 4. **視覺區分**
//    圓點加上 'indicator-video' class
//    可以用不同顏色或圖示區分圖片和影片
//
// ════════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════════════
// 💡 YouTube 網址格式說明
// ════════════════════════════════════════════════════════════════
//
// 支援的格式：
// 1. https://youtu.be/94ThqaZx8Js
// 2. https://www.youtube.com/watch?v=94ThqaZx8Js
//
// 提取 VIDEO_ID：94ThqaZx8Js
//
// 嵌入格式：
// https://www.youtube.com/embed/94ThqaZx8Js
//
// ════════════════════════════════════════════════════════════════
