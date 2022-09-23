import './App.css';
import freeCodeCampLogo from './images/freecode-logo.png';
import Boton from './componets/boton.js';
import  Counter from './componets/Counter.js';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0)

  const click = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={ freeCodeCampLogo }
          alt='logo of freecodecamp' />
      </div>
      <div className='principal-container'>
        <Counter  numClicks={numClicks} />
        <Boton
          text='click'
          isclick={ true }
          clicks={ click } />
        <Boton 
          text='Restart'
          isclick={ false }
          clicks={ restartCounter } />
      </div>
    </div>
  );
}

export default App;
