import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import Description from "./components/description";
import "./App.css";
import movies from "./movie.js";
import { useState } from "react";

function App() {
  const [mymovies, setMyMovie] = useState(movies);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home mymovies={mymovies} setMyMovie={setMyMovie} />}
        />
        <Route
          path="/movies/:id"
          element={<Description mymovies={mymovies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
