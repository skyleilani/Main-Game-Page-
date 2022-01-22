import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const val1 = Math.floor(Math.random() * 100),
  val2 = Math.floor(Math.random() * 100),
  val3 = Math.floor(Math.random() * 100);

const ifCorrectColors = ['#76A113', '#90C418', '#A5E01B', '#B0F01D', '#92C718'],
  ifFalseColors = ['#A11F08', '#C4260A', '#E02B0B', '#F02E0C', '#C7270A'];

const EquationGame = () => {
  const [backgroundColor, setBackgroundColor] = useState(''),
    [numQuestions, setNumQuestions] = useState(0),
    [numCorrect, setNumCorrect] = useState(0);

  const [value1, setValue1] = useState(val1),
    [value2, setValue2] = useState(val2),
    [value3, setValue3] = useState(val3),
    [proposedAnswer, setProposedAnswer] = useState(
      Math.floor(Math.random() * 3) + val1 + val2 + val3
    ),
    [correctAnswer, setCorrectAnswer] = useState(val1 + val2 + val3);

  const randomEquation = () => {
    let ranValue1 = Math.floor(Math.random() * 100),
      ranValue2 = Math.floor(Math.random() * 100),
      ranValue3 = Math.floor(Math.random() * 100);

    setValue1(ranValue1);
    setValue2(ranValue2);
    setValue3(ranValue3);
    setProposedAnswer(
      Math.floor(Math.random() * 3) + ranValue1 + ranValue2 + ranValue3
    );
    setCorrectAnswer(ranValue1 + ranValue2 + ranValue3);
    setNumQuestions(numQuestions + 1);
  };

  const trueButton = () => {
    if (correctAnswer === proposedAnswer) {
      setNumCorrect(numCorrect + 1);

      for (const color of ifCorrectColors) {
        setBackgroundColor(color);
      }
    }
  };

  const falseButton = () => {
    if (correctAnswer !== proposedAnswer) {
      setNumCorrect(numCorrect + 1);

      for (const color of ifFalseColors) {
        setBackgroundColor(color);
      }
    }
  };

  return (
    <div className='Main'>
      <div className='App'>
        <header className='App-header'></header>
        <div className='game' style={{ backgroundColor: backgroundColor }}>
          <div className='equation'>
            <p className='text'>
              {value1} + {value2} + {value3} = {proposedAnswer}
            </p>
          </div>
          <button
            id='true'
            onClick={() => {
              randomEquation();
              trueButton();
            }}
          >
            True
          </button>
          <button
            id='false'
            onClick={() => {
              randomEquation();
              falseButton();
            }}
          >
            False
          </button>
          <p className='text'>
            Your Score: {numCorrect}/{numQuestions}
          </p>
          <Link to='/'>
            <button type='button'>Back to Leadership Board</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EquationGame;
