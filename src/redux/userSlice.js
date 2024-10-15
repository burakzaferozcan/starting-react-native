import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  isLoading: false,
  isAuth: false,
  users: {
    userEmail: "test@test.com",
    userPassword: "1234",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      const loverCaseEmail = action.payload.toLowerCase();
      state.email = loverCaseEmail;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLogin: (state) => {
      if (
        state.email === state.users.userEmail &&
        state.password === state.users.userPassword
      ) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    },
  },
});
export const { setEmail, setPassword, setIsLoading, setLogin } =
  userSlice.actions;
export default userSlice.reducer;
