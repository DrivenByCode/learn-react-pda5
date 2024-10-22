// 연습문제 1
import { useState } from 'react';
export default function Practice1() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  return (
    <>
      <h1>1번</h1>
      <input
        type="text"
        value={num1}
        onChange={(e) => {
          setNum1(e.target.value);
          setSum(Number(num1) + Number(num2));
        }}
      />

      <input
        type="text"
        value={num2}
        onChange={(e) => {
          setNum2(e.target.value);
          setSum(Number(num1) + Number(num2));
        }}
      />
      <br />
      <span>{sum}</span>
    </>
  );
}
