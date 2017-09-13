import "./css/main.scss";
import { RandomGenerator } from "./random-generator";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./react-app.jsx";

// const outputParagraph = document.querySelector('#outputParagraph');
const outputParagraph = $("#outputParagraph");

const outputRandomInt = () => {
  // outputParagraph.textContent = RandomGenerator.randomInteger();
  outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
  // outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
  outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

// const buttonRndInt = document.querySelector('#randomInt');
const buttonRndInt = $("#randomInt");
// const buttonRndRange = document.querySelector('#randomRange');
const buttonRndRange = $("#randomRange");

// buttonRndInt.addEventListener('click', outputRandomInt);
// buttonRndRange.addEventListener('click', outputRandomRange);
buttonRndInt.click(outputRandomInt);
buttonRndRange.click(outputRandomRange);

ReactDOM.render(<App name="Luke" />, document.getElementById("app"));