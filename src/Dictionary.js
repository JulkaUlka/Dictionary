import { useState } from "react";
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
      <form onSubmit={search} className="searchingForm">
        <div class="input-group input-group-lg">
          <input
            type="search"
            placeholder="What are you looking for..."
            onChange={handleSubmit}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
          <input
            type="submit"
            value="Search"
            className="input-group-text"
            id="inputGroup-sizing-lg"
          />
        </div>
      </form>
      <div>
        <Results results={results} />
      </div>
    </div>
  );
}
