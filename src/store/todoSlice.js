import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],
    },
    reducers: {
        CreateTodo(store, action) {

            store.todo.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            }) 
        },
        DeleteTodo(store, action) {
            store.todo = store.todo.filter(todoitem => todoitem.id !== action.payload.id);
        },
        ToggleTodo(store, action) {
            const toggledTodo = store.todo.find(todoitem => todoitem.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;        
        }
    },
});

export const {CreateTodo, DeleteTodo, ToggleTodo} = todoSlice.actions;
export default todoSlice.reducer;