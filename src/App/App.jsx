import './app.css';
import Card from '../components/Card/Card';
import { useState } from 'react';
import ResultCard from '../components/ResultCard/ResultCard';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(undefined);

  const handleOnSubmit = () => {
    if (score) {
      setIsSubmitted(true);
    } else {
      alert('Please select a rating');
    }
  };
  const handleScoreButtonOnclick = (event) => {
    setScore(event.target.value);
  };

  const renderCard = () => {
    if (isSubmitted) {
      return <ResultCard score={score} />;
    } else {
      return <Card onSubmit={handleOnSubmit} scoreButtonOnClick={handleScoreButtonOnclick} />;
    }
  };

  return <main className='vh-100 bg-dark'>{renderCard()}</main>;
}

export default App;
