import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <div className="header__top">
            <div className="logo">
              <img className="logo-img" src="src/assets/Logo.svg" alt="" />
              <h1>FromBoard Delivery</h1>
            </div>
            <div className="header-content">
              <p className="info">
                Доставляем товары из заграницы в Россию <br />
                Стоимость от 550 рублей за заказ <br />
                1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
              </p>
              <div className="telnum">
                <h1 className="tel">+7 (800) 123 45-67</h1>
                <h2 className="desc">Звонки по России бесплатны</h2>
              </div>
            </div>
          </div>

          <div className="header__bottom">
            <nav>
              <li>
                <a href="#hero">Калькулятор</a>
              </li>
              <li>
                <a href="#hero">О нас</a>
              </li>
              <li>
                <a href="#guarantees">Гарантии</a>
              </li>
              <li>
                <a href="#reviews">Отзывы</a>
              </li>
            </nav>
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
    </header>
  );
}
