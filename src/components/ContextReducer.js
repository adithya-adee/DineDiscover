import React, { createContext, useContext, useReducer } from "react";

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];

    case "REMOVE":
      return state.filter((item, index) => index !== action.index);

    case "UPDATE":
      const foundIndex = state.findIndex((item) => item.id === action.id);
      if (foundIndex === -1) {
        throw new Error(`Item with id ${action.id} not found`);
      }
      const updatedItem = {
        ...state[foundIndex],
        qty: state[foundIndex].qty + action.qty,
        price: state[foundIndex].price + action.price,
      };
      return [
        ...state.slice(0, foundIndex),
        updatedItem,
        ...state.slice(foundIndex + 1),
      ];

    case "DROP":
      return [];

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

// Create context for cart state
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []); // Initialize state using useReducer

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

// Custom hooks to use cart state and dispatch
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => {
  const dispatch = useContext(CartDispatchContext);

  if (!dispatch) {
    throw new Error("useDispatchCart must be used within a CartProvider");
  }
  return dispatch;
};
