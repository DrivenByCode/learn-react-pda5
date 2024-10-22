import { useState, useEffect } from 'react';

export default function AdditionalPractice3() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  useEffect(() => {
    return clearInterval(intervalId);
  }, [flag]);
  return (
    <>
      <h1>추가문제 3번</h1>

      <button onClick={() => setIntervalId(setInterval(() => setCount((count) => count + 1), 1000))}>Start</button>
      <button
        onClick={() => {
          setFlag((flag) => !flag);
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setCount(0);
          setFlag((flag) => !flag);
        }}
      >
        Reset
      </button>
      <br />
      <span>{count} 초</span>
    </>
  );
}
