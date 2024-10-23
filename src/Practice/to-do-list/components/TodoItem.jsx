import { useState } from 'react';
import Button from '@mui/material/Button';
import styles from '../Styles';

export default function TodoItem({ todo, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div style={{ ...styles.todoItem, backgroundColor: todo.color }}>
      {isEditing ? (
        <>
          <input value={editText} onChange={(e) => setEditText(e.target.value)} style={styles.input} />
          <Button onClick={handleSave}>저장</Button>
        </>
      ) : (
        <>
          <span onClick={() => setIsEditing(true)}>{todo.text}</span>
          <Button onClick={() => onRemove(todo.id)} style={styles.removeButton}>
            삭제
          </Button>
        </>
      )}
    </div>
  );
}
