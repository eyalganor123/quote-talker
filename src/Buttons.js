import React from 'react';
import "./Buttons.css"

export default function Buttons( {handleSpeak,handleNext}) {
  return (
    <div>
           <button onClick={handleSpeak}>speak</button>
        <button onClick={handleNext}>next</button>
    </div>
  )
}
