import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <div id="header-border">
        <div id="header-container" className="container">
          <div id="profile-container" className="profile-container">
            <div id="logo-container">
              <img id="logo" src={`${process.env.PUBLIC_URL}/images/svg189-tamq.svg`} alt="SVG189" className="frame-svg3" />
              <img id="slash-after-logo" src={`${process.env.PUBLIC_URL}/images/svgmargin1019-g2i.svg`} alt="SVGmargin192" className="frame-sv-gmargin1" />
              <span className="initial-letter">A</span>
              <img id="circle-for-user-letter" src={`${process.env.PUBLIC_URL}/images/circle.png`} alt="circle" className="frame-svg3" />
              <div id="profile-text">Артемий Журавлёв</div>
            </div>
            <div id="header-links">
              <Link id="header-functional-link" to="/cabinet">Личный кабинет</Link>
              <Link id="header-help-link" to="/settings">Настройки</Link>
              <Link id="header-functional-link" to="/">Функционал</Link>
              <Link id="header-help-link" to="/">Помощь</Link>
            </div>
            <div id="logo-with-dot-container">
              <span className="initial-letter">A</span>
              <img id="circle-for-user-letter-with-dot" src={`${process.env.PUBLIC_URL}/images/circle-with-dot.png`} alt="circle-with-dot" className="frame-svg3" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
