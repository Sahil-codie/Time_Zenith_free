import React, { useState, useEffect } from "react";

const ProgressTracker = () => {
  const [tasks, setTasks] = useState(Array(10).fill({ description: "", completed: false }));
  const [progress, setProgress] = useState(0);
  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState("");
  const [showAllHistory, setShowAllHistory] = useState(false);

  const handleTaskChange = (index, value) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], description: value };
    setTasks(newTasks);
  };

  const handleCheckboxChange = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], completed: !newTasks[index].completed };
    setTasks(newTasks);
    updateProgress(newTasks);
  };

  const updateProgress = (updatedTasks) => {
    const completedCount = updatedTasks.filter((task) => task.completed).length;
    const newProgress = (completedCount / 10) * 100;
    setProgress(newProgress);
    const timestamp = new Date().toLocaleString();
    if (!history.some((entry) => entry.progress === newProgress)) { // Prevent duplicate entries
      setHistory([...history, { progress: newProgress, timestamp }]);
    }
  };

  useEffect(() => {
    updateProgress(tasks);
  }, [tasks]);

  useEffect(() => {
    filterHistory(selectedInterval);
  }, [selectedInterval]);

  useEffect(() => {
    setFilteredHistory(history.slice(-5)); // Initial display of last five history entries
  }, [history]);

  const filterHistory = (interval) => {
    const currentDate = new Date();
    let filtered = [];

    if (interval === "24hours") {
      const twentyFourHoursAgo = currentDate.getTime() - 24 * 60 * 60 * 1000;
      filtered = history.filter((entry) => new Date(entry.timestamp) >= new Date(twentyFourHoursAgo));
    } else if (interval === "week") {
      const oneWeekAgo = currentDate.getTime() - 7 * 24 * 60 * 60 * 1000;
      filtered = history.filter((entry) => new Date(entry.timestamp) >= new Date(oneWeekAgo));
    } else if (interval === "month") {
      const oneMonthAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
      filtered = history.filter((entry) => new Date(entry.timestamp) >= oneMonthAgo);
    }

    setFilteredHistory(filtered.slice(-5)); // Display the last five entries after filtering
  };

  const clearHistory = () => {
    setHistory([]);
    setFilteredHistory([]);
  };

  const toggleShowAllHistory = () => {
    setShowAllHistory(!showAllHistory);
    if (!showAllHistory) {
      setFilteredHistory(history); // Show all history entries on dropdown click
    } else {
      setFilteredHistory(history.slice(-5)); // Show only the last five entries initially
    }
  };

  const handleHistoryDeletion = (index) => {
    const updatedHistory = [...history];
    updatedHistory.splice(index, 1);
    setHistory(updatedHistory);
    setFilteredHistory(updatedHistory.slice(-5));
  };

  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-4">Track Your Progress</h2>
        <div className="flex items-center mb-4">
          <div className="w-64 h-8 bg-gray-200 rounded-md overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <p className="text-gray-600">Current Progress: {progress.toFixed(2)}%</p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Tasks</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <li key={index} className="bg-gray-200 rounded-lg p-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleCheckboxChange(index)}
                    className="form-checkbox text-green-600 h-6 w-6 mr-2"
                  />
                  <input
                    type="text"
                    value={task.description}
                    onChange={(e) => handleTaskChange(index, e.target.value)}
                    className="w-full p-2 rounded border border-gray-300"
                    placeholder={`Enter task ${index + 1}`}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>

        {history.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">History</h3>
            <div className="flex justify-between items-center mb-4">
              <div>
                <select
                  onChange={(e) => setSelectedInterval(e.target.value)}
                  className="bg-gray-100 border border-gray-300 rounded-md p-2 mr-4"
                >
                  <option value="">Select Interval</option>
                  <option value="24hours">Last 24 Hours</option>
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                </select>
                <button
                  onClick={toggleShowAllHistory}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {showAllHistory ? "Show Less" : "Show All"}
                </button>
              </div>
              <button
                onClick={clearHistory}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Clear History
              </button>
            </div>
            <ul>
              {filteredHistory.map((entry, index) => (
                <li key={index} className="text-gray-600">
                  {entry.timestamp}: {entry.progress.toFixed(2)}%
                  <button
                    onClick={() => handleHistoryDeletion(history.findIndex((el) => el === entry))}
                    className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    &#x2716;
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;






