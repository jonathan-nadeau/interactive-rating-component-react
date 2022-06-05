import './resultCard.css';
import illustrationThankYou from '../../images/illustration-thank-you.svg';

const ResultCard = ({ score }) => {
  return (
    <div className='resultCard'>
      <div className='imgContainer'>
        <img src={illustrationThankYou} alt='Illustration Thank You' />
      </div>
      <div className='ratingResult'>
        <p>{`You selected ${score} out of 5`}</p>
      </div>
      <h2>Thank you!</h2>
      <p className='description'>
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in
        touch!
      </p>
    </div>
  );
};

export default ResultCard;
