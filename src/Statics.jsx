import { useState } from "react";

const Statics = ({ good, neutral, bad, anecdotes }) => {
  const [selectedAnecdote, setAnecdote] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotes, setMostVotes] = useState(0);

  let totalScore = 0;
  let averageScore = 0;
  let positiveFeedback = 0;

  totalScore = good + neutral * 0 + bad * -1;
  averageScore = totalScore / (good + neutral + bad);

  positiveFeedback = (good / (good + neutral + bad)) * 100;

  const handleRandom = () => {
    setAnecdote(() => {
      const newAnecdote = Math.floor(Math.random() * anecdotes.length);
      return newAnecdote;
    });
  };

  const handleVote = () => {
    const updatedVotes = votes.map((vote, index) =>
      index === selectedAnecdote ? vote + 1 : vote
    );
    setVotes(updatedVotes);
  };

  const handleMostVotes = () => {
    const maxVotesIndex = votes.reduce(
      (previousVote, currentVote, currentIndex) => {
        return currentVote > votes[previousVote] ? currentIndex : previousVote;
      },
      0
    );
    setMostVotes(maxVotesIndex);
  };

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statics</h1>
        <p>No Feedback given</p>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selectedAnecdote]}</p>
        <p>has {votes[selectedAnecdote]} votes</p>
        <button
          onClick={() => {
            handleVote();
            handleMostVotes();
          }}
        >
          vote
        </button>
        <button onClick={handleRandom}>next anecdote</button>

        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[mostVotes]}</p>
        <p>has {votes[mostVotes]} votes</p>
      </div>
    );
  }
  return (
    <div>
      <h2>statics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {averageScore}</p>
      <p>positivie {positiveFeedback} %</p>

      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selectedAnecdote]}</p>
      <p>has {votes[selectedAnecdote]} votes</p>
      <button
        onClick={() => {
          handleVote();
          handleMostVotes();
        }}
      >
        vote
      </button>
      <button onClick={handleRandom}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {votes[mostVotes]} votes</p>
    </div>
  );
};

export default Statics;
