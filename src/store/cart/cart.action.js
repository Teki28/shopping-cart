import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);




const reduceCartItem = (cartItems, productToReduce) => {
  if (productToReduce.quantity === 1) {
    return removeCartItem(cartItems, productToReduce)
  }
  return cartItems.map(
    (cartItem) => cartItem.id === productToReduce.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem)
}

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(
      (cartItem) => cartItem.id === productToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {
  const filteredCartItems = cartItems.filter((item) => (
    item.id !== productToRemove.id
  ))
  return filteredCartItems
}


export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const reduceItemFromCart = (cartItems, productToReduce) => {
  const newCartItems = reduceCartItem(cartItems, productToReduce);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}




