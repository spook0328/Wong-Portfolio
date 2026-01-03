// src/components/Navbar/Navbar.tsx (更新版)

import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const { t } = useLanguage(); // 獲取翻譯函數

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-text">Eric Wong</span>
        <span className="logo-subtitle">{t("nav.logo.subtitle")}</span>
      </Link>

      <div className="navbar-right">
        <ul className="navbar-menu">
          <li>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`nav-link ${isActive("/projects") ? "active" : ""}`}
            >
              {t("nav.projects")}
            </Link>
          </li>
        </ul>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
