import { useState } from "react";

function App() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState("");

  return (
    <div>
      <h1>Goal Tracker</h1>

      <input
        type="text"
        placeholder="Enter Goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Number of Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <br />
      <br />

      <button>Generate Plan</button>

      <h3>Progress: 0%</h3>

      <h3>Motivational Quote</h3>
      <p>Small progress is still progress.</p>
    </div>
  );
}

export default App;