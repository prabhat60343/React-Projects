import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Learn Redux" }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                done:false
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
          },
          markDone:(state,action)=>{
            const todoToMark=state.todos.find(todo=>todo.id===action.payload);
            if(todoToMark){
                todoToMark.done = !todoToMark.done;
            }
          }
    },
});

export const { addTodo, removeTodo, updateTodo, markDone } = todoSlice.actions;
export default todoSlice.reducer;
