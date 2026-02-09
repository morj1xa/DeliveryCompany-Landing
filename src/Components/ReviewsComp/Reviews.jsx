import { React, useState } from "react";
import ReviewsCard from "./ReviewsCard";
import "./Reviews.css";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsContent = [
    {
      name: "Анна",
      text: "Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным",
    },
    {
      name: "Алексей",
      text: "Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным",
    },
    {
      name: "Владимир",
      text: "Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным",
    },
    {
      name: "Sev4ik228",
      text: "Я заказала последний iPhone из США через ваш сервис, и доставка прошла быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка сделали мой опыт покупки невероятно позитивным",
    },
  ];

  function sliderRight() {
    setCurrentReview((prevIndex) => {
      const lastPossibleIndex = reviewsContent.length - 2;

      if (prevIndex >= lastPossibleIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  }
  function sliderLeft() {
    setCurrentReview((prevIndex) => {
      const lastPossibleIndex = reviewsContent.length - 2;

      if (prevIndex <= 0) {
        return lastPossibleIndex;
      }
      return prevIndex - 1;
    });
  }

  return (
    <div className="reviews">
      <h2>Отзывы</h2>
      <div className="reviews-cards">
        <button className="arrow-button" onClick={sliderLeft}>
          <img src="src/assets/arrowLeft.svg" alt="" />
        </button>
        <ReviewsCard review={reviewsContent[currentReview]}></ReviewsCard>
        <ReviewsCard review={reviewsContent[currentReview + 1]}></ReviewsCard>
        <button className="arrow-button" onClick={sliderRight}>
          <img src="src/assets/arrowRight.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
