import React from "react";
import Definition from "./Definition";
import Header from "./Header";
import ImageGallery from "./ImageGallery";
import SearchEngine from "./SearchEngine";
import Synonyms from "./Synonyms";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <Header />
        <SearchEngine />
        <Definition />
        <Synonyms />
        <ImageGallery />
      </div>
    </div>
  );
}
