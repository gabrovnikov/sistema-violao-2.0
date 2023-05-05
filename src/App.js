import { useState } from 'react';
import Timer from './components/Timer';
import Button from './components/Button';

function App() {
  const [lastClickTime, setLastClickTime] = useState(null);
  const [interval, setInterval] = useState(null);

  function handleClick() {
    const now = Date.now();
    if (lastClickTime) {
      setInterval(now - lastClickTime);
    }
    setLastClickTime(now);
  }

  function handleReset() {
    setLastClickTime(null);
    setInterval(null);
  }

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
      <Button onClick={handleReset}>Reset</Button>
      {lastClickTime && <Timer startTime={lastClickTime} />}
      {interval && <p>Interval: {interval} ms</p>}
    </div>
  );
}

export default App;
