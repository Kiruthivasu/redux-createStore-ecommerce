import { createStore } from "redux";


// Actions
export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product
  };
};


export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id
  };
};


// Initial State
const initialState = {
  cart: [],
  total: 0
};


// Reducer
const reducer = (state = initialState, action) => {

  switch(action.type){

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload
        ],
        total: state.total + action.payload.price
      };


    case "REMOVE_FROM_CART":

      const removedItem = state.cart.find(
        item => item.id === action.payload
      );

      return {
        ...state,

        cart: state.cart.filter(
          item => item.id !== action.payload
        ),

        total: state.total - removedItem.price
      };


    default:
      return state;
  }

};


// Create Store
const store = createStore(reducer);


export default store;