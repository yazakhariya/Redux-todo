import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoItemList() {

  const todo = useSelector(store => store.todo.todo);

  return (
    <ul>
        {
          todo.map((todoitem) => 
            (<TodoItem key={todoitem.id} {...todoitem} />))
        }
    </ul>
  )
}

