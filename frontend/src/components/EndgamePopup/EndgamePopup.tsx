import React from 'react'
import "./EndgamePopup.css"

interface endgameSignal {
  guessCorrectAns: boolean
}

const Endgamepopup = (props: endgameSignal) => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className='result-container'>
      {props.guessCorrectAns === true && "You have guessed correct!"}
      {props.guessCorrectAns === false && "Sorry all your guessess were wrong..."}
      <button onClick={refreshPage} className="try-again-button">Try again</button>
    </div>
    
  )
}

export default Endgamepopup