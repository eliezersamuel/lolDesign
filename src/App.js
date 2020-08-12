import React, {useRef, useEffect} from 'react';
import Routes from './routes';

import './assets/styles/global.css';

function App() {
  const squaresRef = useRef();

  useEffect( () => {
    const ulSquares  = squaresRef.current;

    for (let i = 0; i < 20; i++) {
      const li = document.createElement("li");
    
      const random = (min, max) => Math.random() * (max - min) + min;
    
      const size = Math.floor(random(10, 100));
      const position = random(1, 99);
      const delay = random(5, 0.1);
      const duration = random(19, 8);
    
      li.style.width = `${size}px`;
      li.style.height = `${size}px`;
      li.style.bottom = `-${size}px`;
    
      li.style.left = `${position}%`;
    
      li.style.animationDelay = `${delay}s`;
      li.style.animationDuration = `${duration}s`;
      li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
    
      ulSquares.appendChild(li);
    }

  }, []);

  return (
    <div className="App">
      <div className="container">
        <Routes/>
        <ul className="squares" ref={squaresRef}></ul>
      </div>
    </div>
  );
}

export default App;
