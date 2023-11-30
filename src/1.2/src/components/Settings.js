import React from 'react';
import './style.css'; 
import Header from './Header';

function SettingsPage() {
  return (
    <div className="wrapper">
      <Header />
      <main className="settings-page-main-block">
        <div className="main-border" id="main-border-settings-page">
          <div className="main-container container">
            <div id="settings-title-container">
              <div><h1 id="settings-title">Настройки</h1></div>
            </div>
          </div>
        </div>

        <div className="content-container container">
          <div id="left-content-settings-page">
            <div className="container-of-title-of-main-settings">
              <h3 id="title-of-main-settings">Основные</h3>
            </div>
          </div>

          <div className="settings-page-right-content">
            <div className="settings-page-right-block">
              <h4 id="settings-page-label-for-name">Ваше имя</h4>
              <p id="settings-page-comment-for-name">Будет отображаться в на Nil.</p>
              <input type="text" id="setting-page-input-name" className="input-on-settings-page" value="Артемий Журавлёв" />
            </div>
            <div className="settings-page-right-block-lower-part">
              <p id="settings-page-right-block-comment-for-name">Максимум 32 символа</p>
              <button id="settings-page-right-block-save-name-button">Сохранить</button>
            </div>

            <div className="settings-page-right-block">
              <h4 id="settings-page-label-for-email">Ваш email</h4>
              <p id="settings-page-comment-for-email">Привяжите вашу почту.</p>
              <input type="text" id="setting-page-input-email" className="input-on-settings-page" value="artemiy0709@gmail.com" />
            </div>
            <div className="settings-page-right-block-lower-part">
              <p id="settings-page-right-block-comment-for-email">Email должен быть действительным</p>
              <button id="settings-page-right-block-save-email-button">Сохранить</button>
            </div>

            <div className="settings-page-right-block-for-deletion">
              <h4 id="settings-page-label-for-deletion">Удалить аккаунт</h4>
              <p id="settings-page-comment-for-deletion">Навсегда удалите аккаунт, вместе с ним удалятся все ссылки</p>
            </div>
            <div className="settings-page-right-block-lower-part-for-deletion">
              <button id="settings-page-right-block-delete-accaunt-button">Удалить аккаунт</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SettingsPage;
