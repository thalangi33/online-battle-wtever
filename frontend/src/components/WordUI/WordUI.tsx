import React from 'react'
import './WordUI.css';
import { useState, useEffect, useRef } from 'react';

interface wordArray {
  wordleDictionary: Array<string>;
}


const WordUI = (props:wordArray) => {

    const [guess, setGuess] = useState(["", "", "", "", "", ""]);

    const [answer, setAnswer] = useState("");

    const [turn, setTurn] = useState(0);

    let correctAnsIndex: Array<number> = [0, 0, 0, 0, 0, 0];

    let guessIndex: Array<number> = [0, 0, 0, 0, 0, 0];

    const ref = useRef<HTMLDivElement>(null);

    const wordleDictionary: Array<string> = props.wordleDictionary;

    const [correctAns, setCorrectAns] = useState(wordleDictionary[Math.floor(Math.random()*wordleDictionary.length)]);

    console.log("This is the word to guess: " + correctAns);

    function checkWordleDictionary (guess: string, wordleDictionary: Array<String>){
      if (wordleDictionary.includes(guess)){
        return true;
      }
      return false;
    }

    function turnColorGreen (num: number) {
      if ((ref.current?.children as HTMLCollectionOf<HTMLElement>)[turn].children[num] != null){
        ((ref.current?.children as HTMLCollectionOf<HTMLElement>)[turn].children as HTMLCollectionOf<HTMLElement>)[num].style.backgroundColor = "#538d4e"
      }
    }

    function turnColorYellow (num: number) {
      if ((ref.current?.children as HTMLCollectionOf<HTMLElement>)[turn].children[num] != null){
        ((ref.current?.children as HTMLCollectionOf<HTMLElement>)[turn].children as HTMLCollectionOf<HTMLElement>)[num].style.backgroundColor = "#b59f3b"
      }
    }

    function checkingAns (guess: Array<string>, correctAns: string, turn: number) {

      // Setting green boxes
      for (let i = 0; i < correctAns.length; i++){
        if (guess[turn][i] === correctAns[i]){
          console.log(ref.current?.children[turn]);
          
          correctAnsIndex[i] = 1;
          guessIndex[i] = 1;

          turnColorGreen(i);  
        }
      }

      // Setting yellow boxes
      for (let i = 0; i < 5; i++){
        if (guessIndex[i] === 0){
          for (let j = 0; j < 5; j++){
            if (correctAnsIndex[j] === 0){
              if (guess[turn][i] === correctAns[j]){
                turnColorYellow(i);
                correctAnsIndex[j] = 1;
              }
            }
          }
        }
      }


    }

    function detectKeyDown (e: KeyboardEvent) {
      console.log("Clicked key: ", e.keyCode);

      var charCode = e.keyCode;
      let temp: string;
      let tempArray: string[];

      if (charCode == 13){
        if (answer.length != 5){
          console.log("the answer length is not 5: " + answer.length );
          return;
        }
        if (answer.length == 5){
          if (checkWordleDictionary(answer, wordleDictionary)){
            setTurn(turn + 1);
            console.log("the answer length is 5: " + answer.length );

            checkingAns(guess, correctAns, turn);

            setAnswer("");

            return;
          } else {
            console.log("The word does not exist");

            return;
          }
        }
      }

      if (charCode == 8){
        if (answer != ''){
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

      if ( answer.length < 5){
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)){
          if ( answer === ''){
            temp = e.key;
            setAnswer(temp);
            tempArray = [...guess];
            tempArray[turn] = temp;
            setGuess(tempArray);
          } else {
            temp = answer + e.key;
            setAnswer(temp);
            tempArray = [...guess];
            tempArray[turn] = temp;
            setGuess(tempArray);
          }
        }
      }

      

    }

    useEffect(() => {
      document.addEventListener('keydown', detectKeyDown, true);
      console.log("This is the answer now: " + answer);
      console.log("This is the guess now: " + guess[turn]);

      return () => {
        document.removeEventListener('keydown', detectKeyDown, true);
      }
    }, [answer]);

  return (
    <div className="Word_UI-container">
      {/* <input className="ans" autoFocus type="text" onInput={wordInputHandler} value={answer} maxLength={5}/> */}
      <div ref={ref} className='tile-box'>
        <div ref={ref} className='tile-row'>
          <div className='tile guess-1-1'>{guess[0].slice(0,1)}</div>
          <div className='tile guess-1-2'>{guess[0].slice(1,2)}</div>
          <div className='tile guess-1-3'>{guess[0].slice(2,3)}</div>
          <div className='tile guess-1-4'>{guess[0].slice(3,4)}</div>
          <div className='tile guess-1-5'>{guess[0].slice(4,5)}</div>
        </div>
        <div className='tile-row'>
          <div className='tile guess-1-1'>{guess[1].slice(0,1)}</div>
          <div className='tile guess-1-2'>{guess[1].slice(1,2)}</div>
          <div className='tile guess-1-3'>{guess[1].slice(2,3)}</div>
          <div className='tile guess-1-4'>{guess[1].slice(3,4)}</div>
          <div className='tile guess-1-5'>{guess[1].slice(4,5)}</div>
        </div>
        <div className='tile-row'>
          <div className='tile guess-1-1'>{guess[2].slice(0,1)}</div>
          <div className='tile guess-1-2'>{guess[2].slice(1,2)}</div>
          <div className='tile guess-1-3'>{guess[2].slice(2,3)}</div>
          <div className='tile guess-1-4'>{guess[2].slice(3,4)}</div>
          <div className='tile guess-1-5'>{guess[2].slice(4,5)}</div>
        </div>
        <div className='tile-row'>
          <div className='tile guess-1-1'>{guess[3].slice(0,1)}</div>
          <div className='tile guess-1-2'>{guess[3].slice(1,2)}</div>
          <div className='tile guess-1-3'>{guess[3].slice(2,3)}</div>
          <div className='tile guess-1-4'>{guess[3].slice(3,4)}</div>
          <div className='tile guess-1-5'>{guess[3].slice(4,5)}</div>
        </div>
        <div className='tile-row'>
          <div className='tile guess-1-1'>{guess[4].slice(0,1)}</div>
          <div className='tile guess-1-2'>{guess[4].slice(1,2)}</div>
          <div className='tile guess-1-3'>{guess[4].slice(2,3)}</div>
          <div className='tile guess-1-4'>{guess[4].slice(3,4)}</div>
          <div className='tile guess-1-5'>{guess[4].slice(4,5)}</div>
        </div>
        <div className='tile-row'>
          <div className='tile guess-1-1'>{guess[5].slice(0,1)}</div>
          <div className='tile guess-1-2'>{guess[5].slice(1,2)}</div>
          <div className='tile guess-1-3'>{guess[5].slice(2,3)}</div>
          <div className='tile guess-1-4'>{guess[5].slice(3,4)}</div>
          <div className='tile guess-1-5'>{guess[5].slice(4,5)}</div>
        </div>
      </div>
    </div>
  )
}

export default WordUI