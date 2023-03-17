import React from "react";

export default function MovieList({ AddMovie }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <form onSubmit={(e) => AddMovie(e)}>
        <label htmlFor="id">id</label>
        <input type="text" name="id" />
        <label htmlFor="title">title</label>
        <input type="text" name="title" />
        <label htmlFor="description">description</label>
        <input type="text" name="description" />
        <label htmlFor="rating">rating</label>
        <input type="text" name="rating" />
        <button type="submit">Add </button>
      </form>
    </div>
  );
}
