import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }

  return (
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
  );
}
