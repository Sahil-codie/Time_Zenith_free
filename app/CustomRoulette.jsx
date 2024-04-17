import React, { useState } from "react";

const CustomRoulette = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([
    "Exercise for 10 minutes",
    "Read a book chapter",
    "Meditate",
    "Write in a journal",
    "Learn a new word",
  ]);
  const [newTask, setNewTask] = useState("");

  const spinRoulette = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setSelectedTask(tasks[randomIndex]);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6">
          Productivity Roulette
        </h1>
        <div className="mb-6">
          {selectedTask && (
            <div className="text-center">
              <h2 className="text-lg font-semibold">Your Task:</h2>
              <p className="text-gray-800 text-xl">{selectedTask}</p>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
            onClick={spinRoulette}
          >
            Spin
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Enter new task"
            className="mr-2 px-2 py-1 border border-gray-300"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md mr-2"
            onClick={handleAddTask}
          >
            Add Task
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={() => handleRemoveTask(tasks.length - 1)}
          >
            Remove Last Task
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-center">Current Tasks:</h2>
          <ul className="list-disc ml-8">
            {tasks.map((task, index) => (
              <li key={index} className="py-2 border-b border-gray-300">
                <span>{task}</span>
                <button
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomRoulette;

