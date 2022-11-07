import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem:[],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
     state.cartItem = [...state.cartItem,action.payload]
     localStorage.setItem("cart",JSON.stringify(state.cartItem));
    },
    removeFromCart: (state,action) => {
      state.cartItem = [...action.payload]
      localStorage.removeItem("cart");
      localStorage.setItem("cart",JSON.stringify(state.cartItem));
      window.location.reload(false);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer