import { useDispatch } from 'react-redux';
import { DeleteTodo, ToggleTodo } from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {

  const dispatch = useDispatch();

  return (
    <li>
        <input type='checkbox' checked={completed} onChange={() => dispatch(ToggleTodo({id}))}/>
        <span>{text}</span>
        <button onClick={() => dispatch(DeleteTodo({id}))}>delete</button>
    </li>
  )
}

export default TodoItem;