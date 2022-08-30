import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // Documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine d-flex flex-column">
      <div className="SearchEngine__section d-flex flex-row">
        <div className="SearchEngine__form">
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Type a word"
              onChange={handleKeywordChange}
            ></input>
          </form>
        </div>
        <div>
          <button className="SearchEngine__btn" onClick={handleKeywordChange}>
            <p> Search</p>
          </button>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}
