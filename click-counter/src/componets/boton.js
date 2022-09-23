import React from "react";
import '../stylesheets/boton.css'

function Boton({ text, isclick, clicks }) {
  return (
    <button
      className={ isclick ? "boton-click" : "boton-restart" }
      onClick={ clicks }>
      { text }
    </button>
  )
}

export default Boton;
