import React, { useEffect } from 'react';
import './style.css';

const NotFoundPage = () => {
  // Функция для перехода на предыдущую страницу
  const goBack = () => {
    window.history.back();
  };

  // Перенаправление назад через 15 секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      window.history.back();
    }, 15000);

    // Очистка таймера, если пользователь покинет страницу раньше времени
    return () => clearTimeout(timer);
  }, []); // Пустой массив зависимостей гарантирует, что эффект запустится один раз

  return (
    <div className="wrapper notFoundPageWrapper">
      <main className="not-found-page-main-block">
        <div className="content-container content-container-2 container">
          {/* Добавляем обработчик onClick к кнопке */}
          <button id="notFoundPage_returnButton" onClick={goBack}>
            <img id="notFoundPage_returnButtonImage" src="images/return1073-phr.svg" alt="return" className="notFoundPage-returnSvg" />
            <span id="span">Вернуться</span>
          </button>
          <h1 id="notFoundPage-h1-404">404</h1>
          <p className="notFoundPage-p-message">Страница не найдена,</p>
          <p className="notFoundPage-p-message">мы вернем вас обратно!</p>
          <img id="notFoundPage-robotImage" src="images/robot.png" alt=""></img>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
