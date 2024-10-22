import { useEffect, useState } from 'react';

export default function CountComponent() {
  // 첫 번째 인자는 state
  // 두 번째 인자는 핸들러 함수로 state값의 set역할을 함
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log('데이터 받아오기! (이 함수는 한 번만 실행됩니다.)');

    // 정리 함수 : return()
    return () => {
      console.log('메모리를 잡아먹으면 리소스 해제 하는 함수를 return 해 주어야 합니다.');
    };
  }, []);

  useEffect(() => {
    // State변경에 대한 SideEffect 처리 -> Dependency에 count라는 state값을 넣어서 변동 감지
    // Dependency가 변경될 때 마다 첫 번째인자인 effectCallback 함수를 실행시킨다.
    // useEffect함수가 계속해서 실행 될 떄마다 정리함수도 같이 실행된다. 정리함수 실행 -> 첫 번째 인자 실행
    console.log(`카운트가 증가할 때마다 실행! \n -count: ${count}`);
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={addCount}>1 증가</button>
    </div>
  );
}
