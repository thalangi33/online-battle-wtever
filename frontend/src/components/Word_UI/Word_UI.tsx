import React from "react";
import "./Word_UI.css";
import { useState, useEffect } from "react";

const Word_UI = () => {
  const [answer, setAnswer] = useState("");

  // function wordInputHandler (e: React.FormEvent<HTMLInputElement>) {
  //     const result: string = e.currentTarget.value.replace(/[^a-z]/gi, '');
  //     console.log(result);
  //     setAnswer(result);
  //     console.log("hello");
  // }

  function detectKeyDown(e: KeyboardEvent) {
    console.log("Clicked key: ", e.keyCode);

    var charCode = e.keyCode;
    let temp: string;

    if (charCode == 8) {
      if (answer != "") {
        temp = answer;
        temp = temp.substring(0, temp.length - 1);
        console.log(temp);
        console.log("backspace");
        setAnswer(temp);
      }
    }

    if (answer.length < 5) {
      if (
        (charCode > 64 && charCode < 91) ||
        (charCode > 96 && charCode < 123)
      ) {
        if (answer === "") {
          temp = e.key;
          setAnswer(temp);
        } else {
          temp = answer + e.key;
          setAnswer(temp);
        }
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
    console.log("This is the answer now: " + answer);

    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, [answer]);

  return (
    <div className="Word_UI-container">
      {/* <input className="ans" autoFocus type="text" onInput={wordInputHandler} value={answer} maxLength={5}/> */}
      <div className="tile-box">
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {answer.slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {answer.slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {answer.slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {answer.slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {answer.slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {answer.slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {answer.slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {answer.slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {answer.slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {answer.slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {answer.slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {answer.slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {answer.slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {answer.slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {answer.slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {answer.slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {answer.slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {answer.slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {answer.slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {answer.slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {answer.slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {answer.slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {answer.slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {answer.slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {answer.slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {answer.slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {answer.slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {answer.slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {answer.slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {answer.slice(4, 5)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Word_UI;
