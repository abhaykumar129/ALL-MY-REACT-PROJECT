import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})






//  configureSore main sirf object hi milte hai islieye hmne object diya jydatar 





// har app main single application ek hi store  hota hai
// single source of truth