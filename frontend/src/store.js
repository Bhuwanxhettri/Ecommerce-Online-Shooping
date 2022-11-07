import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reduxSlice/addtoCart'
export const store = configureStore({
  reducer: {
    cart:cartReducer,
  },
})