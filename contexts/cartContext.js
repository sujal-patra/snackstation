import React, { createContext } from "react";

export const CartContext = createContext({ shoppingCart: [] });

export const CART_ACTIONS = Object.freeze({
  ADD_TO_CART: 0,
  REMOVE_FROM_CART: 1,
  EMPTY_CART: 2,
  INCREMENT_ITEM: 3,
  REMOVE_ITEM: 4
});

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const itemToAdd = action.payload;
      const cart = [...state];
      const match = cart.find(item => item.id === itemToAdd.id);
      if (!match) {
        cart.push(itemToAdd);
        return cart;
      }
      return state;
      // return updated state from here
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id } = action.payload;
      const cart = [...state];
      const match = cart.find(item => item.id === id);
      if (match) {
        return cart.filter(item => item.id !== id);
      }
      return state;
    }
    case CART_ACTIONS.EMPTY_CART:
      return state - state;
    default:
      Alert.alert("Invalid action");
  }
};

export default ({ children }) => {
  const [shoppingCart, dispatch] = React.useReducer(shoppingCartReducer, []);

  return (
    <CartContext.Provider value={{ shoppingCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { shoppingCart, dispatch } = React.useContext(CartContext);
  return { shoppingCart, dispatch };
};