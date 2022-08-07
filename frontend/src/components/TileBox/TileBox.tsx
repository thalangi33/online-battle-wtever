import React from 'react'
import "./TileBox.css";
import { useState, useEffect, useRef} from "react";

const TileBox = () => {
    const [colorState, setColorState] = useState([1,2,1,2,1]);
    const [opponentTurn, setOpponentTurn] = useState(5);
    const webSocketArray: Array<number> = [1,1,1,1,1]
    const webSocketTurn: number = 1

    const ref = useRef<HTMLDivElement>(null);

    function turnColorGreen(num: number, turn: number) {
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
    
    function turnColorYellow(num: number, turn: number) {
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

    function answerChecking(element: number, index: number) {
        if (element == 2) {
            turnColorGreen(index, opponentTurn)
        }

        if (element == 1){
            turnColorYellow(index, opponentTurn)
            console.log("Turn yellow")
        }
    }

    function updateOpponentGuessIndicator(webSocketArray: Array<number>, webSocketTurn: number) {
        setColorState(webSocketArray)
        setOpponentTurn(webSocketTurn)

        colorState.forEach((element, index) => answerChecking(element, index))

        console.log(webSocketArray)
    }

    useEffect(() => {
        updateOpponentGuessIndicator(webSocketArray, webSocketTurn)
    }, [webSocketTurn])
  return (
    <div ref={ref} className="tile-box">
        <div  className="tile-row">
          <div role="tile" className="tile guess-1-1">
          </div>
          <div role="tile" className="tile guess-1-2">
          </div>
          <div role="tile" className="tile guess-1-3">
          </div>
          <div role="tile" className="tile guess-1-4">
          </div>
          <div role="tile" className="tile guess-1-5">
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
          </div>
          <div role="tile" className="tile guess-1-2">
          </div>
          <div role="tile" className="tile guess-1-3">
          </div>
          <div role="tile" className="tile guess-1-4">
          </div>
          <div role="tile" className="tile guess-1-5">
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
          </div>
          <div role="tile" className="tile guess-1-2">
          </div>
          <div role="tile" className="tile guess-1-3">
          </div>
          <div role="tile" className="tile guess-1-4">
          </div>
          <div role="tile" className="tile guess-1-5">
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
          </div>
          <div role="tile" className="tile guess-1-2">
          </div>
          <div role="tile" className="tile guess-1-3">
          </div>
          <div role="tile" className="tile guess-1-4">
          </div>
          <div role="tile" className="tile guess-1-5">
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
          </div>
          <div role="tile" className="tile guess-1-2">
          </div>
          <div role="tile" className="tile guess-1-3">
          </div>
          <div role="tile" className="tile guess-1-4">
          </div>
          <div role="tile" className="tile guess-1-5">
          </div>
        </div>
        <div className="tile-row">
          <div role="tile" className="tile guess-1-1">
          </div>
          <div role="tile" className="tile guess-1-2">
          </div>
          <div role="tile" className="tile guess-1-3">
          </div>
          <div role="tile" className="tile guess-1-4">
          </div>
          <div role="tile" className="tile guess-1-5">
          </div>
        </div>
    </div>
  )
}

export default TileBox