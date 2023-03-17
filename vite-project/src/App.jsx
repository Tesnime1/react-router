import { useState } from "react";
import harry from "./assets/harry.jpeg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";

import movies from "./movie.js";
import Filter from "./components/Filter";

function App() {
  const [mymovies, setMyMovie] = useState(movies);

  const AddMovie = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const newMovie = Object.fromEntries(formdata);
    newMovie.img = harry;
    console.log(newMovie);
    setMyMovie((previouState) => [...previouState, newMovie]);
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      setMyMovie(movies);
    } else {
      const filtred = movies.filter((item) => item.title === filterValue);
      setMyMovie(filtred);
    }
  };

  return (
    <div className="App">
      <h1>List of Movies </h1>
      <MovieList AddMovie={AddMovie} />
      <Filter handleFilter={handleFilter} />

      <div>
        {mymovies?.map((movie, i) => (
          <MovieCard key={i} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
