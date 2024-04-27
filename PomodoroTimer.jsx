import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            if (isBreak) {
              setIsBreak(false);
              setMinutes(25);
            } else {
              setIsBreak(true);
              setMinutes(5);
            }
            const timestamp = new Date().toLocaleString();
            setHistory([...history, { timestamp, type: isBreak ? 'Break' : 'Work', duration: isBreak ? 5 : 25 }]);
            // Play sound notification here
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
  }, [isActive, minutes, seconds, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4 mt-8">
      <div className="text-center font-bold text-3xl text-green-700">
        Pomodoro Timer
      </div>
      <div className="text-center text-6xl text-gray-800">
        <span>{formatTime(minutes)}</span>:
        <span>{formatTime(seconds)}</span>
      </div>
      <div className="flex justify-center space-x-4">
        {!isActive ? (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleTimer}
          >
            Start
          </button>
        ) : (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleTimer}
          >
            Pause
          </button>
        )}
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      <div className="text-center text-lg text-gray-600">
        {isBreak ? 'Break Time' : 'Work Time'}
      </div>

      {history.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">History</h3>
          <ul>
            {history.map((entry, index) => (
              <li key={index} className="text-gray-600">{entry.timestamp}: {entry.type} ({entry.duration} minutes)</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;