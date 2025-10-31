
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLang = () => setLangOpen(!langOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">

        {/* תפריט ניווט רגיל */}
        <div className="navbar-links">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/overview">{t('nav.overview')}</Link>
          <Link to="/story">{t('nav.story')}</Link>
          <Link to="/sharing">{t('nav.sharing')}</Link>
          <Link to="/game">{t('nav.game')}</Link>
        </div>

        {/* כפתור שפות */}
        <div className="language-selector">
          <button className="lang-btn" onClick={toggleLang}>🌐</button>
          {langOpen && (
            <div className="lang-dropdown">
              <span onClick={() => changeLanguage('he')}>עברית</span>
              <span onClick={() => changeLanguage('en')}>English</span>
              <span onClick={() => changeLanguage('ar')}>العربية</span>
            </div>
          )}
        </div>

        {/* המבורגר למובייל */}
        <div className={`hamburger ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* תפריט נפתח (מובייל) */}
      <div className={`nav-links-dropdown ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>{t('nav.home')}</Link>
        <Link to="/overview" onClick={() => setMenuOpen(false)}>{t('nav.overview')}</Link>
        <Link to="/story" onClick={() => setMenuOpen(false)}>{t('nav.story')}</Link>
        <Link to="/sharing" onClick={() => setMenuOpen(false)}>{t('nav.sharing')}</Link>
        <Link to="/game" onClick={() => setMenuOpen(false)}>{t('nav.game')}</Link>

        {/* שפות במובייל */}
        {/* <div className="lang-dropdown-mobile">
          <span onClick={() => changeLanguage('he')}>עברית</span>
          <span onClick={() => changeLanguage('en')}>English</span>
          <span onClick={() => changeLanguage('ar')}>العربية</span>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;






















