import React from 'react';

export default function InputComponent({text, setText, CreateTodo}) {
  return (
    <form>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type='submit' onClick={CreateTodo}>ADD</button>
    </form>
  )
}

