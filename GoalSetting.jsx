import React, { useState, useEffect } from "react";
import ProgressTracker from "./ProgressTracker";

const GoalSetting = ({ onGoalSet }) => {
  const [goalsWithTrackers, setGoalsWithTrackers] = useState([]);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("goalsWithTrackers")) || [];
    setGoalsWithTrackers(storedGoals);
  }, []);

  const handleGoalSet = (newGoal) => {
    const newGoalWithTracker = { goal: newGoal, tracker: <ProgressTracker key={newGoal.title} /> };
    setGoalsWithTrackers([...goalsWithTrackers, newGoalWithTracker]);
    saveToLocalStorage([...goalsWithTrackers, newGoalWithTracker]);
    if (onGoalSet) {
      onGoalSet(newGoal);
    }
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem("goalsWithTrackers", JSON.stringify(data));
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = [...goalsWithTrackers];
    updatedGoals.splice(index, 1);
    setGoalsWithTrackers(updatedGoals);
    saveToLocalStorage(updatedGoals);
  };

  const handleCompleteGoal = (index) => {
    const updatedGoals = [...goalsWithTrackers];
    updatedGoals[index].goal.completed = true;
    setGoalsWithTrackers(updatedGoals);
    saveToLocalStorage(updatedGoals);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Set Your Goals</h2>
      {goalsWithTrackers.map((goalTracker, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{goalTracker.goal.title}</h3>
          <div className="flex items-center mb-2">
            <span className="text-gray-700 mr-2">{goalTracker.goal.description}</span>
            {goalTracker.goal.completed ? (
              <span className="text-green-600">Completed</span>
            ) : (
              <button onClick={() => handleCompleteGoal(index)} className="text-blue-600 hover:text-blue-800 focus:outline-none">
                Mark as Completed
              </button>
            )}
          </div>
          {goalTracker.tracker}
          <button onClick={() => handleDeleteGoal(index)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4">
            Delete Goal
          </button>
        </div>
      ))}
      <GoalForm onGoalSet={handleGoalSet} />
    </div>
  );
};

const GoalForm = ({ onGoalSet }) => {
  const [goal, setGoal] = useState({
    title: "",
    description: "",
    dueDate: ""
  });

  const handleChange = (e) => {
    setGoal({
      ...goal,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goal.title || !goal.description || !goal.dueDate) {
      alert("Please fill in all fields.");
      return;
    }
    if (onGoalSet) {
      onGoalSet(goal);
    }
    setGoal({
      title: "",
      description: "",
      dueDate: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-gray-700 font-medium mb-1">Title</label>
        <input type="text" id="title" name="title" value={goal.title} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
      </div>
      <div>
        <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Description</label>
        <textarea id="description" name="description" value={goal.description} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none" rows="4" required></textarea>
      </div>
      <div>
        <label htmlFor="dueDate" className="block text-gray-700 font-medium mb-1">Due Date</label>
        <input type="date" id="dueDate" name="dueDate" value={goal.dueDate} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
      </div>
      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline">Set Goal</button>
    </form>
  );
};

export default GoalSetting;
