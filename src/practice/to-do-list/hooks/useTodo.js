import { useEffect, useState } from 'react';

export default function useTodo() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (text, color) => {
    const newTodo = { id: Date.now(), text, color };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return { todoList, addTodo, removeTodo, editTodo };
}
