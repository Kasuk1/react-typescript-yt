import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
  miliseconds: number;
};

export const Timer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    console.log('useEffect fired!');
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds((s) => s + 1), miliseconds);
  }, [miliseconds]);

  return (
    <div>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </div>
  );
};
