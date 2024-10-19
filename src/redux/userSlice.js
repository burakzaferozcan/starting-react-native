import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const auth = getAuth();
      const userCredental = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredental.user;
      const token = user.stsTokenManager.accessToken;
      const userData = {
        token,
        user: user,
      };
      await AsyncStorage.setItem("userToken", token);
      return userData;
    } catch (error) {
      console.log("userSlice 21 line", error);

      throw error;
    }
  }
);

export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");

    if (token) {
      return token;
    } else {
      throw new Error("User Not Found");
    }
  } catch (error) {
    throw error;
  }
});

const initialState = {
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message;
      })
      .addCase(autoLogin.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(autoLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload.token;
      })
      .addCase(autoLogin.rejected, (state, action) => {
        state.isLoading = true;
        state.isAuth = false;
        state.token = null;
      });
  },
});
export const { setEmail, setPassword, setIsLoading, setLogin } =
  userSlice.actions;
export default userSlice.reducer;
