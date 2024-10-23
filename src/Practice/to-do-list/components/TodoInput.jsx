import Button from '@mui/material/Button';
import styles from '../Styles';

export default function TodoInput({ text, setText, onAdd }) {
  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
        style={styles.input}
      />
      <Button variant="contained" color="primary" onClick={onAdd}>
        입력
      </Button>
    </div>
  );
}
