import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function ToDoList() {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);
  const [color, setColor] = useState('');
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>Todo App</h1>
      <br />
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        style={{ backgroundColor: color }}
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
                color: color,
              },
            ],
            setText(''),
          )
        }
      >
        입력
      </Button>
      <br />

      {/* map 으로 바꾸기 */}
      <ColorComponent />

      <br />
      <h1>Todo Items</h1>
      {texts.map((ele, idx) => (
        <div key={idx} style={{ backgroundColor: ele.color, padding: '1em', marginBottom: '1em' }}>
          {ele.text}
        </div>
      ))}
    </div>
  );
}
