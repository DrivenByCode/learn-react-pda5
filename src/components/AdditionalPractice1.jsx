import { useState, useEffect } from 'react';

export default function AdditionalPractice1() {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    console.log(`Toggle is ${toggle ? 'ON' : 'OFF'}`);
  }, [toggle]);
  return (
    <>
      <h1>추가문제 1번</h1>

      <button onClick={() => setToggle((toggle) => !toggle)}>{toggle ? 'ON' : 'OFF'}</button>
    </>
  );
}
