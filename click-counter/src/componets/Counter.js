import React from "react";
import '../stylesheets/Counter.css';

function Counter({ numClicks }) {
  return (
    <div className="Counter">
      { numClicks }
    </div>
  )
}

export default Counter;
