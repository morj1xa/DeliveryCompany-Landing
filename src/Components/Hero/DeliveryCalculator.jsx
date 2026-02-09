import React from "react";

export default function DeliveryCalculator() {
  return (
    <div className="hero__right">
      <h3>Калькулятор доставки</h3>
      <p>
        Посчитайте, сколько будет стоить перевозка <br />
        покупки из зарубежа
      </p>
      <form className="hero__right-form">
        <input className="long" type="text" placeholder="Имя"></input>
        <input type="email" placeholder="Почта"></input>
        <input type="phone" placeholder="Телефон"></input>
        <input type="text" placeholder="Общая площадь, м²"></input>
        <input type="text" placeholder="Вес, кг"></input>
        <input type="text" placeholder="Страна покупки"></input>
        <input type="text" placeholder="Город покупки"></input>
        <input type="text" placeholder="Область доставки"></input>
        <input type="text" placeholder="Город доставки"></input>
        <button>Заказать расчёт</button>
      </form>
    </div>
  );
}
