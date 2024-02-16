const NeutralButton = ({ clicks }) => {
  const handleClick = () => {
    clicks((prevState) => prevState + 1);
  };

  return <button onClick={handleClick}>Neutral</button>;
};

export default NeutralButton;
