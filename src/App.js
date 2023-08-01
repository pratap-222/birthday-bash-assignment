import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

function App() {

  const [time, setTime] = useState(10);
  const [startTime, setStartTime] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);
  
  useEffect(() => {
    if (!startTime) {
      return;
    }
    console.log(time);
    let interval;
    if (time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000)
    }

    return () => {
      clearInterval(interval);
    };

  }, [startTime, time])

  function handleButtonClick() {
    setStartTime(true);
  }

  function handleImageCLick() {
    setIsImageClicked(true);
  }

  const buttonStyles = {
    backgroundColor: '#007bff', 
    color: '#fff', 
    padding: '10px 20px', 
    borderRadius: '4px', 
    border: 'none', 
    cursor: 'pointer', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%',
  };

  const imageStyle = {
    width: '500px',
    height: '500px',
    marginTop: '100px'
  };

  const timeStyle = {
    marginTop: '250px',
    fontSize: '100px',
  }
  
  return (
    <div className="App">
      {
        isImageClicked ? <img src='https://bestwishesfor.com/wp-content/uploads/2020/04/Happy-Birthday-Gif-Images.gif' alt='birthday' style={imageStyle}/>
        : time === 0 ? <img src='https://gifdb.com/images/high/shaking-red-gift-box-bu68nggxzaa4rmsk.gif' onClick={handleImageCLick} alt='box' style={imageStyle}/>
        : startTime ? <h1 style={timeStyle}>{time}</h1>
        : <button className='btn' onClick={handleButtonClick} style={buttonStyles}>Birthday Bash</button>
      }
    </div>
  );
}

export default App;
