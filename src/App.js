import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const generatePlan = () => {
    let newTasks = [];

    for (let i = 1; i <= days; i++) {
      newTasks.push({
        id: i,
        text: 'Day ${i} - Work on ${goal}',
        completed: false,
      });
    }

    setTasks(newTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    tasks.length > 0
      ? Math.round((completed / tasks.length) * 100)
      : 0;

  return (
    <div className="container">
      <h1>Goal Tracker</h1>

      <input
        type="text"
        placeholder="Enter Goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number of Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <button onClick={generatePlan}>
        Generate Plan
      </button>

      <h3>Progress: {progress}%</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: '${progress}% '}}
        ></div>
      </div>

      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.text}
        </div>
      ))}

      <h3>Motivational Quote</h3>
      <p>Small progress is still progress.</p>
    </div>
  );
}

export default App;