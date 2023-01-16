import { createSlice } from '@reduxjs/toolkit';

import Item from '../models/items';

const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = new Item(Date.now().toString(), action.payload.title);
      state.items.push(newItem);
    },
  },
});

export const saveItem = ({ title, image, quantity }) => {
  return async (dispatch) => {
    dispatch(addItem({ title, image, quantity }));
  };
};

export const { addItem } = itemSlice.actions;

export default itemSlice.reducer;
