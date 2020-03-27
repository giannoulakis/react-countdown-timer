import React, { useState, useRef, useEffect } from 'react';
import Timer from './Timer';

function App() {
  
  const inputEl = useRef(null);
  
  const [running, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(25);

  function handleStart(){
    localStorage.setItem('minutes',minutes); //remember 
    setRunning(true);
  }
  
  function handleStop(){
    setRunning(false);
    setPageTitle('Finished')
  }

  function handleKeydown(e){
    return e.keyCode===27 && handleStop() 
  }

  useEffect(()=>{
    const match = window.location.hash.match(/#(\d+)/);

    if(match){
      setMinutes(match[1]);
      setRunning(true);
		} else {
      const saved = localStorage.getItem('minutes');
      if(saved) setMinutes(saved);
		}
    document.addEventListener('keydown',handleKeydown);
    
    return ()=> document.removeEventListener('keydown',handleKeydown);
  },[])

 
  useEffect(()=>{
    if(!running) inputEl.current.focus();
  },[running])
  
  return (
    <div>

      {!running?
        (
          <div className="config">
            <input ref={ inputEl } onKeyDown={e =>{ e.keyCode===13 && handleStart() }} type="number" min="1" max="60" value={ minutes } onChange={ e => setMinutes(e.target.value) } />
            <button onClick={ handleStart }>Start</button>
          </div>
        )
        :
      (
        <div onClick={ handleStop } title="click to stop" className="hand">
          <Timer minutes={ minutes } onUpdate={ setPageTitle } onFinish={ handleStop } />
        </div>
      )}
    </div>
  );
}


function setPageTitle(title){
  document.title = title;
}

export default App;