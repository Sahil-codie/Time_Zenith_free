import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
            Welcome to Time Zenith
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Time Zenith is your ultimate productivity companion. With our{' '}
            <span className="font-semibold text-green-600">Procrastination Buster</span>{' '}
            feature, you can overcome procrastination and boost your focus like never before.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderFeatureCard("Task Roulette", "When users feel stuck or tempted to procrastinate, they can activate Task Roulette. This feature randomly selects a task from their to-do list and presents it to the user, eliminating decision fatigue and indecision.")}
          {renderFeatureCard("Time Constraint", "Once a task is selected, users have a limited amount of time (e.g., 5 minutes) to start working on it. This time constraint helps overcome procrastination by breaking tasks into smaller, manageable chunks and initiating momentum.")}
          {renderFeatureCard("Progress Tracking", "FocusBoost tracks users' completion of tasks initiated through Task Roulette, providing positive reinforcement and motivation. Users can visualize their progress over time and celebrate their accomplishments.")}
          {renderFeatureCard("Pomodoro Timer", "The Pomodoro Timer is a time management technique that helps users stay focused and productive. It involves breaking work into intervals, typically 25 minutes, called 'pomodoros,' separated by short breaks. This technique can improve concentration and prevent burnout.")}
          {renderFeatureCard("Habit Tracker", "The Habit Tracker feature allows users to track their daily habits and monitor their progress. Users can set goals, create habits, and mark them as completed each day. This helps build consistency and develop positive habits over time.")}
          {renderFeatureCard("Goal Setting", "Goal Setting helps users define their objectives and create a roadmap to achieve them. Users can set specific, measurable, achievable, relevant, and time-bound (SMART) goals. This feature provides a structured approach to goal planning and helps users stay motivated and focused.")}
          {renderFeatureCard("Progress and Roulette", "The Progress and Roulette feature combines progress tracking with the element of surprise. Users can track their progress on various tasks and projects while occasionally being presented with random challenges or tasks through the Roulette feature. This adds excitement and variety to the productivity journey.")}
        </div>

        <div className="flex justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const renderFeatureCard = (title, description) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-md">
      <h3 className="text-lg lg:text-xl font-semibold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-800 leading-relaxed">{description}</p>
    </div>
  );
};

export default Hero;
