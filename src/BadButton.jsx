const BadButton = ({ clicks }) => {
  const handleClick = () => {
    clicks((prevState) => prevState + 1);
  };

  return <button onClick={handleClick}>bad</button>;
};

export default BadButton;
