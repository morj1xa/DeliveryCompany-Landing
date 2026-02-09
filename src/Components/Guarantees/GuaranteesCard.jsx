import React from "react";
import "./Guarantees.css";

export default function GuaranteesCard({ img, text }) {
  return (
    <div className="guarantees-card">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}
