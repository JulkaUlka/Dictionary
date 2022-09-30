import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer className="signature">
          This project was coded by{" "}
          <a
            href="https://silly-squirrel-c3d30e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yuliia Hlushko
          </a>{" "}
          and it's open-sourced on{" "}
          <a
            href="https://github.com/JulkaUlka/Dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
