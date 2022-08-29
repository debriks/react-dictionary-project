import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine d-flex flex-row">
      <div className="SearchEngine__form">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange}></input>
        </form>
      </div>
      <button className="SearchEngine__btn" onClick={handleKeywordChange}>
        <p> Search</p>
      </button>
    </div>
  );
}
