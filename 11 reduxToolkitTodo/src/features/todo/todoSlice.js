import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    //  reducer main properties and function aate haii 
    
    reducers: {

        addTodo: (state, action) => { 
            const todo = {
                id: nanoid(), 
                text: action.payload.text
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>todo.id !== action.payload ) 
        },

        
      
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer 

// In this example, todoSlice.reducer is exported as the default  and ye  store main jaata hai 
//  export, which is then imported as todoReducer in your store.js file.



// state ke andar updated  state value in the store
// action andar payload milta 


// action jo bhi data paas hota hai
//  state->current state ko darsata hai 
// state-> intial state kya kya value hme degi state

// action-> jo bhi data paas hota hai wo action me aata hai
// kuch value aaye jaise remove uske liye id ki jarurat hoti hai usko value action se milegei


//  payload object hote hai 


//  do package intall kerna 
// npm install @reduxjs
// npm install react-redux


// first step ---> todoSlice.js
// second step ---> store.js
// third components
// fourth step ---> App.js
// fifth step --> main main provider paas kerte hai