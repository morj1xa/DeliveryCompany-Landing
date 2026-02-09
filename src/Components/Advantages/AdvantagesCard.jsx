import React from "react";

export default function AdvantagesCard({ img, title, par }) {
  return (
    <div className="advantages-card">
      <img src={img} alt="img" />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{par}</p>
      </div>
    </div>
  );
}
