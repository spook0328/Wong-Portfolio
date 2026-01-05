// src/components/ProjectCard/ProjectCard.tsx
// ✅ 直接用這個文件替換你現有的 ProjectCard.tsx

import { useState } from "react";
import type { Project } from "../../data/projects";
import { useLanguage } from "../../contexts/LanguageContext";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  const title = project.title[language];
  const description = project.description[language];

  // 追蹤當前顯示第幾張圖片（從 0 開始）
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 計算總共有幾張圖片
  const totalImages = project.images?.length || 0;

  // 上一張圖片
  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalImages - 1; // 回到最後一張
      }
      return prevIndex - 1;
    });
  };

  // 下一張圖片
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === totalImages - 1) {
        return 0; // 回到第一張
      }
      return prevIndex + 1;
    });
  };

  // 點擊指示點跳到指定圖片
  const goToImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  // 點擊卡片打開連結
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

        {/* 右側：圖片輪播 */}
        {project.images && project.images.length > 0 && (
          <div className="project-carousel-section">
            <div className="carousel-container">
              {/* 當前圖片 */}
              <img
                src={project.images[currentImageIndex]}
                alt={`${title} - ${currentImageIndex + 1}`}
                className="carousel-image"
                loading="lazy"
              />

              {/* 左右箭頭（只在有多張圖片時顯示） */}
              {totalImages > 1 && (
                <>
                  <button
                    className="carousel-button carousel-button-prev"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                  >
                    ←
                  </button>

                  <button
                    className="carousel-button carousel-button-next"
                    onClick={goToNext}
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* 指示點和計數（只在有多張圖片時顯示） */}
            {totalImages > 1 && (
              <div className="carousel-indicators">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator-dot ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={(e) => goToImage(index, e)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}

                <span className="image-counter">
                  {currentImageIndex + 1} / {totalImages}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
