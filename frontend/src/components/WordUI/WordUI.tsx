import VirtualKeyboard from 'components/VirtualKeyboard/VirtualKeyboard';
import React from "react";
import "./WordUI.css";
import { useState, useEffect, useRef } from "react";
import EndgamePopup from "../EndgamePopup/EndgamePopup";

interface word {
  wordleDictionary: Array<string>;
}

const WordUI = (props: word) => {
  const [guess, setGuess] = useState(["", "", "", "", "", ""]);

  const [answer, setAnswer] = useState("");

  const [turn, setTurn] = useState(0);

  let correctAnsIndex: Array<number> = [0, 0, 0, 0, 0, 0];

  let guessIndex: Array<number> = [0, 0, 0, 0, 0, 0];

  const ref = useRef<HTMLDivElement>(null);

  const wordleDictionary: Array<string> = props.wordleDictionary;

  const [correctAns, setCorrectAns] = useState("apple");

  const [finishedGame, setFinishedGame] = useState(false);
  const [guessCorrectAns, setGuessCorrectAns] = useState(false);

  console.log("This is the word to guess: " + correctAns);

  function checkWordleDictionary(
    guess: string,
    wordleDictionary: Array<String>
  ) {
    if (wordleDictionary.includes(guess)) {
      return true;
    }
    return false;
  }

  function checkCorrectAns(correctAnsIndex: Array<number>) {
    if (
      correctAnsIndex[0] === 1 &&
      correctAnsIndex[1] === 1 &&
      correctAnsIndex[2] === 1 &&
      correctAnsIndex[3] === 1 &&
      correctAnsIndex[4] === 1
    ) {
      return true;
    }
    return false;
  }

  function turnColorGreen(num: number) {
    if (
      (ref.current?.children as HTMLCollectionOf<HTMLElement>)[turn].children[
        num
      ] != null
    ) {
      (
        (ref.current?.children as HTMLCollectionOf<HTMLElement>)[turn]
          .children as HTMLCollectionOf<HTMLElement>
      )[num].style.backgroundColor = "#538d4e";
    }
  }

  function turnColorYellow(num: number) {
    if (
      (ref.current?.children as HTMLCollectionOf<HTMLElement>)[turn].children[
        num
      ] != null
    ) {
      (
        (ref.current?.children as HTMLCollectionOf<HTMLElement>)[turn]
          .children as HTMLCollectionOf<HTMLElement>
      )[num].style.backgroundColor = "#b59f3b";
    }
  }

  function checkingAns(guess: Array<string>, correctAns: string, turn: number) {
    // Setting green boxes
    for (let i = 0; i < correctAns.length; i++) {
      if (guess[turn][i] === correctAns[i]) {
        console.log(ref.current?.children[turn]);

        correctAnsIndex[i] = 1;
        guessIndex[i] = 1;

        turnColorGreen(i);
      }
    }

    // If all green, return true, implying have found correct ans
    if (checkCorrectAns(correctAnsIndex)) {
      return true;
    }

    // Setting yellow boxes
    for (let i = 0; i < 5; i++) {
      if (guessIndex[i] === 0) {
        for (let j = 0; j < 5; j++) {
          if (correctAnsIndex[j] === 0) {
            if (guess[turn][i] === correctAns[j]) {
              turnColorYellow(i);
              correctAnsIndex[j] = 1;
            }
          }
        }
      }
    }

    // If all not green, return false, implying have not found correct ans
    return false;
  }

  function detectKeyDown(e: KeyboardEvent) {
    console.log("Clicked key: ", e.keyCode);

    var charCode = e.keyCode;

    gameLogic(charCode, e.key)
  }

  function gameLogic(charCode: number, key: string){
    let temp: string;
    let tempArray: string[];

    // Check when user press enter
    if (charCode == 13) {
      // if user types less than 5 letter words
      if (answer.length != 5) {
        console.log("the answer length is not 5: " + answer.length);
        return;
      }
      // if user types 5 letter words
      if (answer.length == 5) {
        // check if the word exits
        if (checkWordleDictionary(answer, wordleDictionary)) {
          // Go next turn
          setTurn(turn + 1);
          console.log("the answer length is 5: " + answer.length);

          // if the answer is correct
          if (checkingAns(guess, correctAns, turn) === true) {
            console.log("You have found the correct ans!!!");
            setFinishedGame(true);
            setGuessCorrectAns(true);
            return;
          }
          if (checkingAns(guess, correctAns, turn) === false && turn === 5) {
            console.log("Sorry all your guesses were wrong");
            setFinishedGame(true);
            setGuessCorrectAns(false);
            return;
          }

          setAnswer("");
          console.log("Running")
          return;
        } else {
          console.log("The word does not exist");

          return;
        }
      }
    }

    if (charCode == 8) {
      if (answer != "") {
        temp = answer;
        temp = temp.substring(0, temp.length - 1);
        console.log(temp);
        console.log("backspace");
        setAnswer(temp);
        tempArray = [...guess];
        tempArray[turn] = temp;
        setGuess(tempArray);
      }
    }

    if (answer.length < 5) {
      if (
        (charCode > 64 && charCode < 91) ||
        (charCode > 96 && charCode < 123)
      ) {
        if (answer === "") {
          temp = key;
          setAnswer(temp);
          tempArray = [...guess];
          tempArray[turn] = temp;
          setGuess(tempArray);
        } else {
          temp = answer + key;
          setAnswer(temp);
          tempArray = [...guess];
          tempArray[turn] = temp;
          setGuess(tempArray);
        }
      }
    }
  }

  useEffect(() => {
    if (finishedGame === false) {
      document.addEventListener("keydown", detectKeyDown, true);
      console.log("This is the answer now: " + answer);
      console.log("This is the guess now: " + guess[turn]);

      return () => {
        document.removeEventListener("keydown", detectKeyDown, true);
      };
    }
  }, [answer, finishedGame]);

  return (
    <div className="Word_UI-container">
      {finishedGame && <EndgamePopup guessCorrectAns={guessCorrectAns} />}
      {/* <input className="ans" autoFocus type="text" onInput={wordInputHandler} value={answer} maxLength={5}/> */}
      <div ref={ref} className="tile-box">
        <div ref={ref} className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {guess[0].slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {guess[0].slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {guess[0].slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {guess[0].slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {guess[0].slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {guess[1].slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {guess[1].slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {guess[1].slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {guess[1].slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {guess[1].slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {guess[2].slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {guess[2].slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {guess[2].slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {guess[2].slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {guess[2].slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {guess[3].slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {guess[3].slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {guess[3].slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {guess[3].slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {guess[3].slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {guess[4].slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {guess[4].slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {guess[4].slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {guess[4].slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {guess[4].slice(4, 5)}
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
            {guess[5].slice(0, 1)}
          </div>
          <div role="tile" className="tile guess-1-2">
            {guess[5].slice(1, 2)}
          </div>
          <div role="tile" className="tile guess-1-3">
            {guess[5].slice(2, 3)}
          </div>
          <div role="tile" className="tile guess-1-4">
            {guess[5].slice(3, 4)}
          </div>
          <div role="tile" className="tile guess-1-5">
            {guess[5].slice(4, 5)}
          </div>
        </div>
      </div>
      <VirtualKeyboard gameLogic={gameLogic}/>
    </div>
  );
};

export default WordUI;
