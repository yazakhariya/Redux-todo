import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateTodo } from './store/todoSlice';
import './App.css';
import InputComponent from './components/InputComponent';
import TodoItemList from './components/TodoItemList';
import FilterList from './components/FilterList';


function App() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  function AddTask(e) {
    e.preventDefault();
    dispatch(CreateTodo({text}));
    setText('');
  }

  return (
    <div className="App">
      <InputComponent text={text} setText={setText} CreateTodo={AddTask}/><FilterList />
      <TodoItemList />
    </div>
  );
}

export default App;
