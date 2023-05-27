import {createSlice} from '@reduxjs/toolkit';

export const filters = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    NOT_COMPLETED: "NOT_COMPLETED"
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],
        FilterTodo: filters.All,
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
        },
        FilterTodo(store, action) {
            store.FilterTodo = action.payload;
        }
    },
});

export const {CreateTodo, DeleteTodo, ToggleTodo, FilterTodo} = todoSlice.actions;
export default todoSlice.reducer;