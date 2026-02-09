import React from "react";
import GuaranteesCard from "./GuaranteesCard";
import "./Guarantees.css";

export default function Guarantees() {
  return (
    <div className="guarantees" id="guarantees">
      <h2>Гарантии качества</h2>
      <p>
        Наши гарантии качества включают в себя полный спектр документов,
        необходимых <br />
        для ввоза и вывоза товаров, а также для успешного бизнеса на мировом
        рынке.
        <br />
        Мы предоставляем вам надёжность и уверенность
        <div className="guarantees-gal">
          <GuaranteesCard
            img={"src/assets/Rectangle 3.png"}
            text={"Свидетельство о регистрации в РФ"}
          ></GuaranteesCard>
          <GuaranteesCard
            img={"src/assets/Rectangle 3 (1).png"}
            text={"Свидетельство о регистрации в США"}
          ></GuaranteesCard>
          <GuaranteesCard
            img={"src/assets/Rectangle 3 (2).png"}
            text={`Свидетельство о регистрации в Китае`}
          ></GuaranteesCard>
          <GuaranteesCard
            img={"src/assets/Rectangle 3 (3).png"}
            text={"Свидетельство о регистрации в Великобритнии"}
          ></GuaranteesCard>
        </div>
        <button>Показать больше документов</button>
      </p>
    </div>
  );
}
