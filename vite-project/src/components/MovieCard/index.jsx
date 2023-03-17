import React from "react";
import "./style.css";
export default function MovieCard({ title, desc, rating, img }) {
  return (
    <div>
      <p>{title}</p>
      <img src={img} alt="" />
      <p>{desc}</p>
      <p>{rating}</p>
    </div>
  );
}
