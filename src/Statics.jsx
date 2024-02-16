const Statics = ({ good, neutral, bad }) => {
  let totalScore = 0;
  let averageScore = 0;
  let positiveFeedback = 0;

  totalScore = good + neutral * 0 + bad * -1;
  averageScore = totalScore / (good + neutral + bad);

  positiveFeedback = (good / (good + neutral + bad)) * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statics</h1>
        <p>No Feedback given</p>
      </div>
    );
  }
  return (
    <div>
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
export default Statics;
