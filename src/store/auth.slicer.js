<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

import { signIn, signUp } from './actions';
=======
<<<<<<<< HEAD:src/store/actions/auth.action.js
import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from '../../constants/firebase';

export const signUp = createAsyncThunk(
  'auth/signUp',
========
import { createSlice } from '@reduxjs/toolkit';

import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from '../constants/firebase';
>>>>>>> reduxtoolkit-test

const initialState = {
  token: null,
  userId: null,
<<<<<<< HEAD
  error: null,
  success: false,
  loading: false,
=======
>>>>>>> reduxtoolkit-test
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
<<<<<<< HEAD
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userId = action.payload.userId;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userId = action.payload.userId;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;
=======
  reducers: {
    login: (state, action) => {
      state.userId = action.payload;
      state.token = action.payload;
    },
    register: (state, action) => {
      state.userId = action.payload;
      state.token = action.payload;
    },
  },
});

export const { login, register } = authSlice.actions;
>>>>>>>> reduxtoolkit-test:src/store/auth.slicer.js

  async (email, password) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      return { token: data.idToken, userId: data.localId };
    } catch (error) {
      throw error;
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',

  async (email, password) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      return { token: data.idToken, userId: data.localId };
    } catch (error) {
      throw error;
    }
  }
);

/*export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      dispatch(
        register({
          token: data.idToken,
          userId: data.localId,
        })
      );
    } catch (error) {
      throw error;
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();
      dispatch(
        login({
          token: data.idToken,
          userId: data.localId,
        })
      );
    } catch (error) {
      throw error;
    }
  };
<<<<<<<< HEAD:src/store/actions/auth.action.js
};*/
========
};

export default authSlice.reducer;
>>>>>>>> reduxtoolkit-test:src/store/auth.slicer.js
>>>>>>> reduxtoolkit-test
