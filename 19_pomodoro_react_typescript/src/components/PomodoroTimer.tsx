import { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/secondsToTime';
import Button from './Button';
import Timer from './Timer';

interface Props {
  pomodoroTimer: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = useState(props.pomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000)

  return (
    <div className='pomodoro'>
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text='Test' onClick={() => console.log('oi')} />
        <Button text='Test' onClick={() => console.log('oi')} />
        <Button text='Test' onClick={() => console.log('oi')} />
      </div>

      <div className="details">
        <p>asdkasjdhkasdgajsdhgajsdhg</p>
        <p>asdkasjdhkasdgajsdhgajsdhg</p>
        <p>asdkasjdhkasdgajsdhgajsdhg</p>
        <p>asdkasjdhkasdgajsdhgajsdhg</p>
      </div>
    </div>
  )
}

export default PomodoroTimer