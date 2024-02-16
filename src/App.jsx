import { useState } from "react";
import GoodButton from "./goodButton.jsx";
import NeutralButton from "./neutralButton.jsx";
import BadButton from "./badButton.jsx";

const App = () => {
  // save each button click in its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let totalScore = 0;
  let averageScore = 0;
  let positiveFeedback = 0;

  totalScore = good + neutral * 0 + bad * -1;
  averageScore = totalScore / (good + neutral + bad);

  positiveFeedback = (good / (good + neutral + bad)) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <GoodButton clicks={setGood} />
      <NeutralButton clicks={setNeutral} />
      <BadButton clicks={setBad} />
      <h1>statics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {averageScore}</p>
      <p>positivie {positiveFeedback} %</p>
    </div>
  );
};

export default App;
