import { useState } from 'react';
import Button from 'react-bootstrap/Button';
export default function InputComponent({ props }) {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        style={{ backgroundColor: props.color }}
        placeholder="입력"
        value={text}
      />
      <Button
        variant="success"
        onClick={() =>
          setTexts(
            [
              ...texts,
              {
                text: text,
                color: props.color,
              },
            ],
            setText(''),
          )
        }
      >
        입력
      </Button>
      <br />
    </>
  );
}
