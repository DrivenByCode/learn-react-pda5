import { useEffect, useRef } from 'react';
export default function FocusInputButton() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(inputRef.current);
      console.log(inputRef.current?.value);
    }, 5000);

    return () => {
      console.log('리소스반환');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <button onClick={focusInput}>입력하러 가기</button>
      <div style={{ height: 2000 }}></div>
      <input ref={inputRef} type="text" />
      <div style={{ height: 2000 }}></div>
    </div>
  );
}
