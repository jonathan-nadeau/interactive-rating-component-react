import './SubmitButton.css';

const SubmitButton = ({ onClick }) => {
  return (
    <button className='submitButton' onClick={onClick}>
      SUBMIT
    </button>
  );
};

export default SubmitButton;
