import { useEffect, useState } from 'react';

export default function BlinkComponent({ text }) {
  const [showText, setShowText] = useState(true);

  // useEffect(함수, dependency 배열)
  // => 2번 째 인자인 dependency가 변할 떄 마다, 첫 번째 인자인 함수를 실행한다.
  useEffect(() => {
    const timeoutId = setInterval(() => {
      // setShowText(showText => {
      //     return !showText
      // })
      setShowText((showText) => !showText);
    }, 1000);
    return () => {
      // dependency가 빈배열이므로 아무런 값의 변화가 없음. 이 때 useEffect의 첫 번째 인자는 무조건 한번만 실행됨
      // 만약 dependency가 변동이 있어서 여러번 실행된다면 useEffect의 첫번째 인자 실행 -> 반환함수 -> useEffect의 첫번째 인자 실행이런식으로 반복됨.
      console.log('반환함수 실행');
      clearInterval(timeoutId);
    };
  }, []);

  return <div>{showText ? text : null}</div>;
}
