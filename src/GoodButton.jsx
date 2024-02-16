const GoodButton = ({clicks}) => {
  const handleClick = () => {
    clicks((prevState) => prevState + 1);
  };

  return <button onClick={handleClick}>Good</button>;
};

export default GoodButton;
