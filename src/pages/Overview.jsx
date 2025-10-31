


import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Overview.css';
import '../i18n';

const Overview = () => {
  const { t } = useTranslation();

  const tips = t('overview.tips', { returnObjects: true });
  const motivations = t('overview.motivations', { returnObjects: true });

  return (
    <div className="overview-container">
      <h3 className="info-section">{t('overview.title')}</h3>

      <div className="info-block1">{t('overview.block1')}</div>

      <hr className="divider" />

      <div className="info-block1">{t('overview.block2')}</div>

      <div className="info-section1">
        <h4>{t('overview.mainCausesTitle')}</h4>
        <p>{t('overview.cause1')}</p>
        <p>{t('overview.cause2')}</p>
        <p>{t('overview.cause3')}</p>

        <span className="image4">
          <img src="image4.jpeg" alt="profile" width="200" height="250" />
        </span>

        <h4>{t('overview.helpTitle')}</h4>
        <p>{t('overview.help1')}</p>
        <p>{t('overview.help2')}</p>
        <p>{t('overview.help3')}</p>
        <p>{t('overview.help4')}</p>
      </div>

      <div className="info-section1">
        <h4>{t('overview.signsTitle')}</h4>
        <p>{t('overview.signs1')}</p>
        <p>{t('overview.signs2')}</p>
        <p>{t('overview.signs3')}</p>
        <p>{t('overview.signs4')}</p>

        <div className="mental-health-tips">
          <h3>{t('overview.tipsTitle')}</h3>
          <ul>
            {Array.isArray(tips) &&
              tips.map((tip, index) => <li key={index}>{tip}</li>)}
          </ul>
        </div>

        <p className="motivational-quotes-title">{t('overview.motivationTitle')}</p>

        <div className="motivational-quotes">
          {Array.isArray(motivations) &&
            motivations.map((quote, index) => <p key={index}>{quote}</p>)}
        </div>

        <div className="help-quote">{t('overview.helpQuote')}</div>
      </div>

      <footer className="page-footer">
        <div className="footer-content">
          <p className="footer-title">{t('overview.footerTitle')}</p>
          <p className="footer-subtitle">{t('overview.footerSubtitle')}</p>

          <div className="footer-links">
            <a
              href="https://www.1201.org.il"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('overview.footerLinks.eran')}
            </a>
            <span>|</span>
            <a
              href="https://www.enosh.org.il"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('overview.footerLinks.enosh')}
            </a>
          </div>

          <p className="footer-note">{t('overview.footerNote')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Overview;


