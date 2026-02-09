import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="logo-copyright">
              <div className="logo">
                <img className="logo-img" src="src/assets/Logo.svg" alt="" />
                <h1>FromBoard Delivery</h1>
              </div>
              <p>2023 © Ни одно право не защищено, копируйте сколько влезет</p>
            </div>

            <nav>
              <li>
                <a href="#hero">Калькулятор</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Гарантии</a>
              </li>
              <li>
                <a href="#">Отзывы</a>
              </li>
            </nav>
            <div className="footer-content">
              <div className="telnum">
                <h1 className="tel">+7 (800) 123 45-67</h1>
                <h2 className="desc">Звонки по России бесплатны</h2>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__bottom-left">
              НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то,
              что цены носят информационный и ознакомительный характер,
              <br />
              а значит ни в какой мере не являются публичной офертой, которая
              определена в ст. 437 ГК РФ. Вся информация на сайте может
              содержать неточности,
              <br />
              орфографические и иные ошибки, она не является полной,
              окончательно и исчерпывающей
            </p>
            <p className="footer__bottom-right">
              Разработкой занимался
              <br />
              Кошелев Всеволод
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
