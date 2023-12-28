import "./App.css";
import React, { useEffect, useState } from "react";
import jsonData from "./assets/sondrineData.json";

function App() {
  console.log(jsonData);
  return (
    <>
      {jsonData["Conklin Ink"].map((product) => (
        <div key={product["Item Number"]}>{product["Desc"]}</div>
      ))}
    </>
  );
}

export default App;
