import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function hendleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(hendleResponse);
  }

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <section>
        <form onSubmit={search} className="searchingForm">
          <div class="input-group input-group-lg">
            <input
              type="search"
              placeholder="What word do you want to look up?"
              onChange={handleSubmit}
              className="form-control"
            />
          </div>
        </form>
      </section>

      <Results results={results} />
    </div>
  );
}
