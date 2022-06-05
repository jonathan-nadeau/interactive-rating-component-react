import './button.css';

const Button = ({ score, scoreButtonOnClick }) => {
  return (
    <button className={`cardButton`} value={score} onClick={scoreButtonOnClick}>
      {score}
    </button>
  );
};

export default Button;
