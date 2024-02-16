import { useState } from "react";
import GoodButton from "./goodButton.jsx";
import NeutralButton from "./neutralButton.jsx";
import BadButton from "./badButton.jsx";

const App = () => {
  // save each button click in its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
    </div>
  );
};

export default App;
