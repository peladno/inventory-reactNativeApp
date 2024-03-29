import { createSlice } from '@reduxjs/toolkit';

import { URL_GEO } from '../constants/firebase/index';
import { getItems, insertProduct, deleteProduct, searchProducts, getRandomItems } from '../db';
import Product from '../models/products';

const initialState = {
  items: [],
  random: [],
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
        action.payload.coords,
        action.payload.category,
        action.payload.description
      );
      state.items.push(newItem);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    searchItems: (state, action) => {
      state.items = action.payload;
    },
    setRandomItems: (state, action) => {
      state.random = action.payload;
    },
  },
});

export const { addItem, setItems, deleteItem, searchItems, setRandomItems } = itemSlice.actions;

export const saveItem = ({ name, image, quantity, coords, category, description }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEO(coords?.lat, coords?.lng));

      if (!response.ok) throw new Error('Couldn`t connect');

      const data = await response.json();

      if (!data.results) throw new Error('Couldn`t find the location');

      const address = data.results[0].formatted_address;
      const result = await insertProduct(
        name,
        image,
        quantity,
        address,
        coords,
        category,
        description
      );

      dispatch(
        addItem({
          id: result.insertId,
          name,
          image,
          quantity,
          coords,
          address,
          category,
          description,
        })
      );
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

export const deleteItemThunk = (id) => {
  return async (dispatch) => {
    try {
      await deleteProduct(id);
      dispatch(deleteItem(id));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const searchItem = (searchTerm) => {
  return async (dispatch) => {
    try {
      const result = await searchProducts(searchTerm);
      dispatch(searchItems(result?.rows?._array));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const loadRandomItems = (count) => {
  return async (dispatch) => {
    try {
      const result = await getRandomItems(count);
      dispatch(setRandomItems(result?.rows?._array));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export default itemSlice.reducer;
