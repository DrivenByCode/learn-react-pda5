import { useState, useEffect } from 'react';

// counter state를 이용하는게 아니라 flag를 이용하는 것으로 바꿔보기
// useEffect의 dependency에 적힌 변수는 함수 구현부에서 무조건 사용하도록 구현.

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
