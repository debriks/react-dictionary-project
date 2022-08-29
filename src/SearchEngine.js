import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyWord, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
    </div>
  );
}
