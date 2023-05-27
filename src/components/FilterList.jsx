import { useDispatch } from 'react-redux';
import { FilterTodo, filters } from '../store/todoSlice';

export default function FilterList({id}) {

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(FilterTodo(filters.ALL))}>Все</button>
      <button onClick={() => dispatch(FilterTodo(filters.COMPLETED))}>Законченные</button>
      <button onClick={() => dispatch(FilterTodo(filters.NOT_COMPLETED))}>Незаконченные</button>
    </div>
  )
}
