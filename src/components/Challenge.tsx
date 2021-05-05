import React, { FC, useState } from 'react';
import Divider from 'antd/es/divider';
import Input from 'antd/es/input';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { TypeChallenge } from '../challenges';
import Button from 'antd/es/button';
import checkSolved from './utils/checkSolved';

const { TextArea } = Input;

interface TypeProps {
  challenge: TypeChallenge;
  index: number;
  onFinished: (challengeId: number, ms: number) => void;
  best: number;
}

const Challenge: FC<TypeProps> = ({ challenge, index, onFinished, best }) => {
  const {
    title,
    challengeText,
    solution,
    solutionRegex,
    textAreaRows,
    startingText,
    withTimer,
  } = challenge;

  const [value, setValue] = useState(startingText);
  const [timeStarted, setTimeStarted] = useState(0); // epoch
  const [timeFinished, setTimeFinished] = useState(0); // epoch (also acts as solved boolean)

  const handleReset = () => {
    setTimeStarted(0);
    setTimeFinished(0);
    setValue(startingText);
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const val = event.target.value;
    setValue(val);
    if (checkSolved(val, solution, solutionRegex)) {
      const timeNow = Date.now();
      setTimeFinished(timeNow);

      onFinished(index, timeNow - timeStarted);
    }
  };

  const handleStart = (): void => {
    setTimeStarted(Date.now());
  };

  const isRunning = Boolean(timeStarted && !timeFinished);
  const isFinished = Boolean(timeFinished);

  const isDisabled = withTimer && !isRunning;

  return (
    <div id={`challenge${index}`} key={`challenge${index}`}>
      <h2>{title}</h2>
      {challengeText}
      {startingText && (
        <div>
          <TextArea
            rows={textAreaRows || 1}
            size="large"
            defaultValue={startingText}
            onChange={handleChange}
            value={value}
            disabled={isDisabled}
          />
        </div>
      )}
      {withTimer && (
        <>
          <Button onClick={handleStart} disabled={isFinished}>
            Start
          </Button>{' '}
          <Button onClick={handleReset}>Reset</Button>{' '}
          {Boolean(timeFinished) && (
            <div>
              <h3>Good job! 🎉 &nbsp; Time: {(timeFinished - timeStarted) / 1000} seconds</h3>
            </div>
          )}
          {best && <h3>Best: {best / 1000} seconds</h3>}
        </>
      )}

      {solution && (
        <div>
          Produce this...
          <div>
            <TextArea
              rows={textAreaRows || 1}
              size="large"
              // style={{ maxWidth: '1000px' }}
              defaultValue={solution}
              disabled
              style={{ userSelect: 'none' }}
              onCopy={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}
      <Divider />
    </div>
  );
};

export default Challenge;
