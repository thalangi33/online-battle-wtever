import React from 'react'
import './WordUI.css';
import { useState, useEffect } from 'react';

const Word_UI = () => {

    const [guess, setGuess] = useState(["", "", "", "", "", ""]);

    const [answer, setAnswer] = useState("");

    const [turn, setTurn] = useState(0);

    // function wordInputHandler (e: React.FormEvent<HTMLInputElement>) {
    //     const result: string = e.currentTarget.value.replace(/[^a-z]/gi, '');
    //     console.log(result);
    //     setAnswer(result);
    //     console.log("hello");
    // }

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
          setTurn(turn + 1);
          console.log("the answer length is 5: " + answer.length );
          setAnswer("");
          return;
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
      <div className='tile-box'>
        <div className='tile-row'>
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

export default Word_UI