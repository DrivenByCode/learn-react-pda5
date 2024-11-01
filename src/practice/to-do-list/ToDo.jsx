import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useMemo, useEffect } from 'react';
import useTodo from './hooks/useTodo';
import TodoInput from './components/TodoInput';
import Colorbar from './components/ColorBar';
import TodoList from './components/TodoList';
import SearchInput from './components/SearchInput';
import styles from './Styles';
import CustomModal from '../CustomModal';

const COLORS_TO_PICK = ['white', 'red', 'yellow', 'pink', 'skyblue'];

export default function ToDoList() {
  const { todoList, addTodo, removeTodo, editTodo } = useTodo();
  const [text, setText] = useState('');
  const [color, setColor] = useState(COLORS_TO_PICK[0]);
  const [query, setQuery] = useState('');
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text, color);
      setText('');
    }
  };

  useEffect(() => {
    console.log(`>>>>> isShow ${isShow}`);
  }, [isShow]);

  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) => todo.text.toLowerCase().includes(query.toLowerCase()));
  }, [todoList, query]);
  return (
    <>
      <CustomModal show={isShow} onShow={handleOpen} onHide={handleClose} />
      <div style={styles.container}>
        <h1 style={styles.title}>Todo App</h1>
        <TodoInput text={text} setText={setText} onAdd={handleAddTodo} />
        <Colorbar colors={COLORS_TO_PICK} selectedColor={color} onSelectColor={setColor} />
        <SearchInput query={query} setQuery={setQuery} />
        <TodoList todos={filteredTodos} onRemove={removeTodo} onEdit={editTodo} />
      </div>
    </>
  );
}
