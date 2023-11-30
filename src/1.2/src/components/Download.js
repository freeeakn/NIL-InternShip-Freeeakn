import './style.css'; 
import React, { useState, useEffect } from 'react';
// import Header from './Header';

function DownloadPage() {
  const [showFirstPage, setShowFirstPage] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowFirstPage(prev => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wrapper">
      {showFirstPage ? (
        <>

      <header>
        <div id="header-border">
          <div id="header-container" className="container">
            <div id="profile-container" className="profile-container">
              <div id="logo-container">
                <img id="logo" src={`${process.env.PUBLIC_URL}/images/gradient1_circle.png`} alt="gradient1_circle" className="frame-svg3" />
                <img id="slash-after-logo" src={`${process.env.PUBLIC_URL}/images/svgmargin1019-g2i.svg`} alt="SVGmargin192" className="frame-sv-gmargin1" />
                <img id="logo2" src={`${process.env.PUBLIC_URL}/images/gradient1_circle.png`} alt="gradient1_circle" className="frame-svg3" />
                <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient1_rectangle.png`} alt="gradient1_rectangle" />
              </div>
              <div id="logo-with-dot-container">
                <span className="initial-letter">A</span>
                <img id="logo3" src={`${process.env.PUBLIC_URL}/images/gradient1_circle.png`} alt="gradient1_circle" className="frame-svg3" />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="settings-page-main-block">
        <div className="main-border">
          <div className="main-container container">
            <div id="settings-title-container">
              <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient1_rectangle.png`} alt="gradient1_rectangle" />
              <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient1_rectangle.png`} alt="gradient1_rectangle" />
            </div>
          </div>
        </div>

        <div className="main-container container">
          <div id="settings-title-container">
            <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient1_rectangle.png`} alt="gradient1_rectangle" />
            <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient1_rectangle.png`} alt="gradient1_rectangle" />
          </div>
        </div>

        <div className="content-container container">
          <div id="left-content-settings-page">
            <div className="container-of-title-of-main-settings">
              {/* <h3 id="title-of-main-settings">Основные</h3> */}
              <img class="square1" src={`${process.env.PUBLIC_URL}/images/gradient1_square.png`} alt="gradient1_rectangle" />
            </div>
          </div>

          <div className="settings-page-right-content">
            <img class="square2" src={`${process.env.PUBLIC_URL}/images/gradient1_square.png`} alt="gradient1_rectangle" />
          </div>
        </div>
      </main>
      



      </>
      ) : (
        <>





      <header>
        <div id="header-border">
          <div id="header-container" className="container">
            <div id="profile-container" className="profile-container">
              <div id="logo-container">
                <img id="logo" src={`${process.env.PUBLIC_URL}/images/gradient2_circle.png`} alt="gradient2_circle" className="frame-svg3" />
                <img id="slash-after-logo" src={`${process.env.PUBLIC_URL}/images/svgmargin1019-g2i.svg`} alt="SVGmargin192" className="frame-sv-gmargin1" />
                <img id="logo2" src={`${process.env.PUBLIC_URL}/images/gradient2_circle.png`} alt="gradient2_circle" className="frame-svg3" />
                <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient2_rectangle.png`} alt="gradient2_rectangle" />
              </div>
              <div id="logo-with-dot-container">
                <span className="initial-letter">A</span>
                <img id="logo3" src={`${process.env.PUBLIC_URL}/images/gradient2_circle.png`} alt="gradient2_circle" className="frame-svg3" />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="settings-page-main-block">
        <div className="main-border">
          <div className="main-container container">
            <div id="settings-title-container">
              <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient2_rectangle.png`} alt="gradient2_rectangle" />
              <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient2_rectangle.png`} alt="gradient2_rectangle" />
            </div>
          </div>
        </div>

        <div className="main-container container">
          <div id="settings-title-container">
            <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient2_rectangle.png`} alt="gradient2_rectangle" />
            <img class="rectangle1" src={`${process.env.PUBLIC_URL}/images/gradient2_rectangle.png`} alt="gradient2_rectangle" />
          </div>
        </div>

        <div className="content-container container">
          <div id="left-content-settings-page">
            <div className="container-of-title-of-main-settings">
              {/* <h3 id="title-of-main-settings">Основные</h3> */}
              <img class="square1" src={`${process.env.PUBLIC_URL}/images/gradient2_square.png`} alt="gradient2_rectangle" />
            </div>
          </div>

          <div className="settings-page-right-content">
            <img class="square2" src={`${process.env.PUBLIC_URL}/images/gradient2_square.png`} alt="gradient2_rectangle" />
          </div>
        </div>
      </main>


      </>
      )}
    </div>

  );
}

export default DownloadPage;
