import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';
import { filters } from '../store/todoSlice';

export default function TodoItemList() {

  const todo = useSelector(store => store.todo.todo);
  const filter = useSelector((state) => state.todo.FilterTodo);

  const filteredTodo = () => {
    if(filter === filters.COMPLETED) {
      return todo.filter(todo => todo.completed);
    }
    if(filter === filters.NOT_COMPLETED) {
      return todo.filter(todo => !todo.completed)
    }
    
    return todo;
  }

  return (
    <ul>
        {
          filteredTodo().map((todoitem) => 
            (<TodoItem key={todoitem.id} {...todoitem} />))
        }
    </ul>
  )
}

