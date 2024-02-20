import { useState } from "react";
import GoodButton from "./goodButton.jsx";
import NeutralButton from "./neutralButton.jsx";
import BadButton from "./badButton.jsx";
import Statics from "./Statics.jsx";

const App = () => {
  // save each button click in its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  return (
    <div>
      <h2>Give Feedback</h2>
      <GoodButton clicks={setGood} />
      <NeutralButton clicks={setNeutral} />
      <BadButton clicks={setBad} />
      <Statics good={good} neutral={neutral} bad={bad} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
