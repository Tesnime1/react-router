import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Description({ mymovies }) {
  const { id } = useParams();

  const searchmovie = mymovies?.filter((movie) => movie.id === id);
  console.log(searchmovie);
  return (
    <div>
      {searchmovie[0]?.title}
      <img src={searchmovie[0]?.img} alt={searchmovie[0]?.title} />
    </div>
  );
}
