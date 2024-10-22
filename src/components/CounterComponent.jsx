import { useState } from 'react';

export default function CountComponent() {
  // const [<state> 값, <state변경할 수 있는 handler>] = useState(<initialValue>)
  // state가 바뀌면 함수를 다시 그림
  const [count, setCount] = useState(0);

  // count 변수를 직접 수정하지 않고 setCount라는 핸들러 함수를 이용해야 함.
  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>1 증가</button>
    </div>
  );
}
