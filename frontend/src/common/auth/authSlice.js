import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isLoggedIn:localStorage.getItem("login"),
    user:localStorage.getItem("user")
  }
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {
      state.isLoggedIn = "true";
      state.user = action.payload
      localStorage.setItem("login","true");
      localStorage.setItem("user",state.user.email);
    },
    logout: (state) => {
      state.isLoggedIn = "false";
      state.user = null;
      localStorage.setItem("login","false");
      localStorage.removeItem('token');
      localStorage.removeItem("user");
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout} = authSlice.actions
export default authSlice.reducer