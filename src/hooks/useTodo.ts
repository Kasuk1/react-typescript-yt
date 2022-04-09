import { useContext } from 'react';
import { TodoContext } from '../todo/context/TodoContext';

export const useTodo = () => {
  const {
    todoState: { todos },
    toggleTodo,
  } = useContext(TodoContext);

  return {
    todos,
    pendingTodos: todos.filter((todo) => !todo.completed).length,
    toggleTodo,
  };
};
