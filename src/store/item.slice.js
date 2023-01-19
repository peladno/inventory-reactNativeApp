import { createSlice } from '@reduxjs/toolkit';

import { URL_GEO } from '../constants/firebase/index';
import { getItems, insertProduct } from '../db';
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
        action.payload.id,
        action.payload.name,
        action.payload.image,
        action.payload.quantity,
        action.payload.address,
        action.payload.coords
      );
      state.items.push(newItem);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, setItems } = itemSlice.actions;

export const saveItem = ({ name, image, quantity, coords }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEO(coords?.lat, coords?.lng));

      if (!response.ok) throw new Error('Couldn`t connect');

      const data = await response.json();

      if (!data.results) throw new Error('Couldn`t find the location');

      const address = data.results[0].formatted_address;
      const result = await insertProduct(name, image, quantity, address, coords);

      dispatch(addItem({ id: result.insertId, name, image, quantity, coords, address }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const loadItems = () => {
  return async (dispatch) => {
    try {
      const result = await getItems();
      dispatch(setItems(result?.rows?._array));
    } catch (error) {
      console.warn(error);
      throw error;
    }
  };
};

export default itemSlice.reducer;
