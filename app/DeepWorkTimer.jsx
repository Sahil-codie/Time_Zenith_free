import React, { useState, useEffect } from 'react';

const DeepWorkTimer = () => {
  const [minutes, setMinutes] = useState(90);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            const timestamp = new Date().toLocaleString();
            setHistory([...history, { timestamp, duration: 90 }]);
            alert('Congratulations! You have completed a deep work session!');
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(90);
    setSeconds(0);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg p-6 space-y-4 mt-8">
      <div className="text-center font-bold text-3xl text-gray-100">
        🚀 Deep Work Mode 🚀
      </div>
      <div className="text-center text-6xl text-gray-300">
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="flex justify-center space-x-4">
        {!isActive ? (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleTimer}
          >
            Start Deep Work
          </button>
        ) : (
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleTimer}
          >
            Pause Deep Work
          </button>
        )}
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>

      {history.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">History</h3>
          <ul>
            {history.map((entry, index) => (
              <li key={index} className="text-gray-400">{entry.timestamp}: Deep Work Session ({entry.duration} minutes)</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DeepWorkTimer;
