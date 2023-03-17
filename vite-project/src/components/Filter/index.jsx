import React from "react";

export default function Filter({ handleFilter }) {
  return (
    <div>
      <select onChange={(e) => handleFilter(e)}>
        <option value="all">all</option>
        <option value="title">title</option>
      </select>
    </div>
  );
}
