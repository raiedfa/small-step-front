
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';
import '../i18n';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="title">{t('home.title')}</h1>

      <div className="image">
        <img src="image.jpeg" alt="profile" width="750" height="350" />
        <p>{t('home.quote')}</p>
      </div>

      <div className="text-with-dots">
        <p>{t('home.text1')}</p>
        <p>{t('home.text2')}</p>
        <p>{t('home.text3')}</p>
        <p>{t('home.text4')}</p>
        <p>{t('home.text5')}</p>
        <p>{t('home.text6')}</p>
      </div>

      <div className="overthinking">
        💡 {t('home.overthinking')}
      </div>

      <div className="image1">
        <img src="image1.jpeg" alt="profile" width="350" height="550" />

        <div className="questions-container">
          <span className="question">{t('home.question1')}</span>
          <span className="question">{t('home.question2')}</span>
          <span className="question">{t('home.question3')}</span>
          <span className="question">{t('home.question4')}</span>
          <span className="question">{t('home.question5')}</span>
          <span className="question">{t('home.question6')}</span>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-quote">💡 {t('home.footerQuote')}</p>
        <p>© {new Date().getFullYear()} {t('home.footerRights')}</p>
      </footer>
    </>
  );
};

export default Home;




















































