import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import pathColor from './utils/pathColor';
import trailColor from './utils/trailColor';

type ProgressbarProps = {
  value: number;
  text: string;
};

const Progressbar: React.FC<ProgressbarProps> = ({ value, text }) => {
  return (
    <CircularProgressbar
      value={value}
      text={text}
      background
      backgroundPadding={6}
      styles={buildStyles({
        textColor: 'white',
        pathColor: pathColor(value),
        trailColor: trailColor(value),
        backgroundColor: '#081c22',
        textSize: '35px',
      })}
    ></CircularProgressbar>
  );
};

export default Progressbar;
