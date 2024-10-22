import { useState, useEffect } from 'react';

export default function AdditionalPractice4() {
  const [time, setTime] = useState(0);
  const [counter, setCounter] = useState(-9);
  useEffect(() => {
    if (time === 0 && counter !== -9) {
      clearInterval(counter);
      alert('타이머 종료');
    }
  }, [time]);

  return (
    <>
      <h1>추가문제 4번</h1>

      <input type="text" onChange={(e) => setTime(e.target.value)} />
      <button
        onClick={() =>
          setCounter(() =>
            setInterval(() => {
              setTime((time) => time - 1);
            }, 1000),
          )
        }
      >
        시작
      </button>
      <br />
      <span>남은시간: {time}</span>
    </>
  );
}
