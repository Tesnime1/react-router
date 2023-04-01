import React from "react";
import "./style.css";
export default function MovieCard({ title, desc, rating, img, id }) {
  return (
    <div>
      <a href={`/movies/${id}`}>
        <p>{title}</p>
      </a>
      <img src={img} alt="image" />
      <p>show the description in anothor page</p>

      <p>{desc}</p>
      <p>{rating}</p>
    </div>
  );
}
