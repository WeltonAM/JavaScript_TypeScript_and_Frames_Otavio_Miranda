import { secondsToMinute } from "../utils/secondsToMinute";

interface Props {
  mainTime: number;
}

const Timer = (props: Props): JSX.Element => {
  return (
    <div className="timer">
      {secondsToMinute(props.mainTime)}
    </div>
  )
}

export default Timer