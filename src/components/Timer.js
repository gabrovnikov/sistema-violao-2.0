import { useState, useEffect, useCallback } from 'react';
import '../components/Timer.css'

function Timer(props) {
  const calculateElapsedTime = useCallback(() => {
    console.log("onTick prop received:", props.onTick);
    return Date.now() - props.startTime;
  }, [props.startTime, props.onTick]);

  const [time, setTime] = useState(calculateElapsedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateElapsedTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [calculateElapsedTime]);

  const seconds = Math.floor(time / 1000);
  const milliseconds = time % 1000;

  return (
    <p>
      Time: {seconds}s {milliseconds}ms
    </p>
  );
}

export default Timer;
