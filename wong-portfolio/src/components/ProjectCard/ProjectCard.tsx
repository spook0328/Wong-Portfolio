import { useState } from "react";
import type { Project } from "../../data/projects";
import { useLanguage } from "../../contexts/LanguageContext";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

// YouTube 影片 ID 提取
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

// 按鈕文字
function getLinkButtonText(
  type: string,
  language: "en" | "zh",
  customLabel?: { en: string; zh: string }
): string {
  if (customLabel) {
    return customLabel[language];
  }

  const defaultLabels: Record<string, { en: string; zh: string }> = {
    github: { en: "GitHub", zh: "GitHub" },
    website: { en: "Website", zh: "網站" },
    demo: { en: "Demo", zh: "試玩" },
    video: { en: "Video", zh: "影片" },
    other: { en: "Link", zh: "連結" },
  };

  return defaultLabels[type]?.[language] || defaultLabels.other[language];
}

// 按鈕圖示
function getLinkButtonIcon(type: string): string {
  const icons: Record<string, string> = {
    github: "⚡",
    website: "🌐",
    demo: "🎮",
    video: "🎬",
    other: "🔗",
  };

  return icons[type] || icons.other;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  const title = project.title[language];
  const description = project.description[language];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const totalMedia = project.media?.length || 0;

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalMedia - 1;
      }
      return prevIndex - 1;
    });
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prevIndex) => {
      if (prevIndex === totalMedia - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const goToMedia = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex(index);
  };

  return (
    <article className="project-card">
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

          {/* ✅ 連結按鈕區域 */}
          {project.links && project.links.length > 0 && (
            <div className="project-links">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-link-button ${link.type}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="link-icon">
                    {getLinkButtonIcon(link.type)}
                  </span>
                  <span className="link-text">
                    {getLinkButtonText(link.type, language, link.label)}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* 右側：媒體輪播 */}
        {project.media && project.media.length > 0 && (
          <div className="project-carousel-section">
            <div className="carousel-container">
              {(() => {
                const currentMedia = project.media![currentMediaIndex];

                if (currentMedia.type === "image") {
                  return (
                    <img
                      src={currentMedia.url}
                      alt={`${title} - ${currentMediaIndex + 1}`}
                      className="carousel-image"
                      loading="lazy"
                    />
                  );
                } else if (currentMedia.type === "youtube") {
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
