import { createSlice } from '@reduxjs/toolkit';

import { URL_GEO } from '../constants/firebase/index';
import Product from '../models/products';

const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = new Product(
        Date.now().toString(),
        action.payload.name,
        action.payload.image,
        action.payload.quantity,
        action.payload.address,
        action.payload.coords
      );
      state.items.push(newItem);
    },
  },
});

export const saveItem = ({ name, image, quantity, coords }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEO(coords?.lat, coords?.lng));

      if (!response.ok) throw new Error('Couldn`t connect');

      const data = await response.json();

      if (!data.results) throw new Error('Couldn`t find the location');

      const address = data.results[0].formatted_address;

      dispatch(addItem({ name, image, quantity, coords, address }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const { addItem } = itemSlice.actions;

export default itemSlice.reducer;
