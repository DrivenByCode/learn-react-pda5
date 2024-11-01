import TodoItem from './TodoItem';
import styles from '../Styles';

export default function TodoList({ todos, onRemove, onEdit }) {
  return (
    <div style={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </div>
  );
}
