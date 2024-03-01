import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../features/todos/todoSlice';

export const Store = configureStore({
      reducer:todoSlice
});