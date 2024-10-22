import { useState } from 'react';

export default function OnChangeInput() {
  // useState("초기값")에 적는 것은 초기값
  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setUserInput(e.target.value);
          // setUserInput(userInput => e.target.value)
        }}
        value={userInput}
      />
      <br />
      입력된 글자: {userInput}
    </div>
  );
}
