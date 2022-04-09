import { useContext } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  /* const {
    todoState: { todos },
  } = useContext(TodoContext); */
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
