import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const CartContext = createContext();

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  console.log(state);

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
