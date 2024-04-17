import React, { useState } from 'react';

const HabitTracking = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    if (newHabit.trim() !== '') {
      setHabits([...habits, { name: newHabit, page: 0, checkboxes: Array(100).fill(false) }]);
      setNewHabit('');
    }
  };

  const handleDeleteHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
  };

  const handleChangePage = (index, direction) => {
    const updatedHabits = [...habits];
    const habit = updatedHabits[index];
    const newPage = direction === 'next' ? habit.page + 1 : habit.page - 1;
    updatedHabits[index] = { ...habit, page: newPage };
    setHabits(updatedHabits);
  };

  const handleCheckboxChange = (habitIndex, checkboxIndex) => {
    const updatedHabits = [...habits];
    const habit = updatedHabits[habitIndex];
    const newCheckboxes = [...habit.checkboxes];
    newCheckboxes[checkboxIndex] = !newCheckboxes[checkboxIndex];
    updatedHabits[habitIndex] = { ...habit, checkboxes: newCheckboxes };
    setHabits(updatedHabits);
  };

  const calculateProgress = (habit) => {
    const checkedCount = habit.checkboxes.filter((checkbox) => checkbox).length;
    return (checkedCount / 100) * 100;
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Habit Tracking</h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter new habit"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button
          className="bg-green-500 text-white font-semibold px-4 py-2 rounded-r hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={handleAddHabit}
        >
          Add
        </button>
      </div>
      <ul className="space-y-4">
        {habits.map((habit, habitIndex) => (
          <li key={habitIndex} className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">{habit.name}</span>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => handleDeleteHabit(habitIndex)}
              >
                Delete
              </button>
            </div>
            <div className="grid grid-cols-10 gap-2 mt-2">
              {habit.checkboxes.slice(habit.page * 10, (habit.page + 1) * 10).map((checkbox, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2">{index + 1 + habit.page * 10}</span>
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-500 h-6 w-6"
                    checked={checkbox}
                    onChange={() => handleCheckboxChange(habitIndex, index + habit.page * 10)}
                  />
                  {checkbox && (
                    <span className="text-sm text-gray-500 ml-1">
                      {new Date().toLocaleDateString()}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded ${
                  habit.page === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleChangePage(habitIndex, 'prev')}
                disabled={habit.page === 0}
              >
                Prev
              </button>
              <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded ${
                  habit.page === 9 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleChangePage(habitIndex, 'next')}
                disabled={habit.page === 9}
              >
                Next
              </button>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex items-center mr-4">
                <div className="w-16 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-500" style={{ width: `${calculateProgress(habit)}%` }}></div>
                </div>
                <span className="ml-2 text-sm text-gray-500">{calculateProgress(habit).toFixed(2)}%</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium mr-2">Reading:</span>
                <div className="w-16 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracking;

