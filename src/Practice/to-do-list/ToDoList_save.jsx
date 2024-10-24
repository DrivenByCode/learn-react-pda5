import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Styles.js';

export default function ToDoList() {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);
  const [color, setColor] = useState('');

  const colors = ['white', 'red', 'yellow', 'pink'];

  const handleAddTodo = () => {
    if (text.trim()) {
      // 빈 값 방지
      setTexts([...texts, { text: text, color: color }]);
      setText('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo App</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          style={{ ...styles.input, backgroundColor: color }}
          placeholder="입력"
          value={text}
        />
        <Button variant="success" onClick={handleAddTodo} style={styles.button}>
          입력
        </Button>
      </div>

      <div style={styles.colorSelector}>
        {colors.map((col, idx) => (
          <Button
            key={idx}
            className="rounded-circle"
            style={{ ...styles.colorButton, backgroundColor: col }}
            onClick={() => setColor(col)} //
          />
        ))}
      </div>

      <h2 style={styles.todoTitle}>Todo Items</h2>
      <div style={styles.todoList}>
        {texts.map((ele, idx) => (
          <div key={idx} style={{ ...styles.todoItem, backgroundColor: ele.color }}>
            {ele.text}
          </div>
        ))}
      </div>
    </div>
  );
}
