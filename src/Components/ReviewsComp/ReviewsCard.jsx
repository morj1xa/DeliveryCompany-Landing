import React from "react";
import "./Reviews.css";
export default function ReviewsCard({ review }) {
  return (
    <div className="review-card">
      <p>{review.text}</p>
      <div className="card-bottom">
        <span>{review.name}</span>
        <img src="src/assets/comaIcon.svg" alt="" />
      </div>
    </div>
  );
}
