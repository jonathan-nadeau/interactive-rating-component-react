import iconStar from '../../images/icon-star.svg';
import './card.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import Button from '../Button/Button';

const Card = ({ onSubmit, scoreButtonOnClick }) => {
  const scores = [1, 2, 3, 4, 5];

  return (
    <div className='card'>
      <div className='imgContainer'>
        <img src={iconStar} alt='Icon of a star' />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering
      </p>
      <div className='buttonContainer'>
        {scores.map((score, index) => (
          <Button key={index} score={score} scoreButtonOnClick={scoreButtonOnClick} />
        ))}
      </div>
      <div className='buttonContainer'>
        <SubmitButton onClick={onSubmit} />
      </div>
    </div>
  );
};

export default Card;
