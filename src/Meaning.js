import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>
        {" "}
        <em> {props.meaning.partOfSpeech} </em>{" "}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {" "}
              <strong> Definition: </strong>
              {definition.definition}{" "}
            </p>
            <br />
            <em>{definition.example}</em>
            <br />
            <Synonyms synonyms={definition.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
