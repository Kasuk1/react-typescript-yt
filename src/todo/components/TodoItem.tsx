import { useContext } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { TodoContext } from '../context/TodoContext';
import { Todo } from '../interfaces/interfaces';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  // const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useTodo();

  /* const handleDbClick = () => {
    toggleTodo(todo.id);
  }; */

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.desc}
    </li>
  );
};
