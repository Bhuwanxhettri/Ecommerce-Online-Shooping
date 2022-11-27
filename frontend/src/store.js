import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reduxSlice/addtoCart'
import authReducer from "./common/auth/authSlice"
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    auth:authReducer,
  },
})