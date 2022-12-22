import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getItemsFromLocalStorage } from 'utils/localStorage';
import reducer from './reducer';

const CartContext = createContext();

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const cartItems = getItemsFromLocalStorage('cart');
    dispatch({ type: 'SETUP_CART', payload: cartItems });
  }, []);

  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTALS' });
  }, [state.cart]);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
