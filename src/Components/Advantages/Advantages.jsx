import React from "react";
import AdvantagesCard from "./AdvantagesCard";
import "./Advantages.css";

export default function Advantages() {
  return (
    <div className="advantages" id="advantages">
      <h2>Наши преимущества</h2>
      <div className="advantages-cards">
        <AdvantagesCard
          img={"src/assets/Board.svg"}
          title={"Растоможка груза"}
          par={`Мы берём на себя все формальности 
                и бумажную волокиту, связанную 
                с растаможкой груза`}
        ></AdvantagesCard>
        <AdvantagesCard
          img={"src/assets/Package.svg"}
          title={"Надёжная упаковка"}
          par={`Все товары упаковываются нашими 
                специалистами с особым вниманием 
                к деталям, гарантируя, что они дойдут 
                в безопасности и в отличном состоянии`}
        ></AdvantagesCard>
        <AdvantagesCard
          img={"src/assets/Delivery.svg"}
          title={"Быстро и выгодно"}
          par={`Мы предлагаем быструю и 
                выгодную доставку, чтобы вы 
                могли насладиться покупками как 
                можно скорее.`}
        ></AdvantagesCard>
        <AdvantagesCard
          img={"src/assets/best support.svg"}
          title={"Удобный сервис"}
          par={`Стремимся сделать процесс 
                доставки максимально удобным 
                для вас, чтобы опыт остался 
                приятным и беззаботным`}
        ></AdvantagesCard>
        <AdvantagesCard
          img={"src/assets/clear info.svg"}
          title={"Прозрачность работы"}
          par={`Мы предоставляем полный контроль 
                над каждым этапом доставки, 
                от момента заказа до момента 
                прибытия заказа`}
        ></AdvantagesCard>
        <AdvantagesCard
          img={"src/assets/garantee.svg"}
          title={"Страхование груза"}
          par={`Наше страхование 
                обеспечивает полную защиту и 
                покрытие почти все неприятные и 
                неожиданные ситуации`}
        ></AdvantagesCard>
      </div>
    </div>
  );
}
