import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Advantages from "./Components/Advantages/Advantages";
import Guarantees from "./Components/Guarantees/Guarantees";
import Footer from "./Components/Footer/Footer";
import Reviews from "./Components/ReviewsComp/Reviews";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Hero></Hero>
        <Advantages></Advantages>
        <Guarantees></Guarantees>
        <Reviews></Reviews>
        <div className="application" id="application">
          <h2>Остались вопросы?</h2>
          <div className="application-form">
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="Почта" />
            <input type="phone" placeholder="Телефон" />
            <input type="text" placeholder="Тема вопроса" />
            <input type="text" placeholder="Сообщение" className="big" />
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
