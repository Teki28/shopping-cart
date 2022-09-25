import { createContext,useEffect,useState } from "react";

const reduceCartItem = (cartItems,productToReduce)=>{
  if(productToReduce.quantity===1){
    return removeCartItem(cartItems,productToReduce)
  }
  return cartItems.map(
    (cartItem)=>cartItem.id===productToReduce.id ?
    {...cartItem,quantity:cartItem.quantity-1}
    :cartItem)
}

const addCartItem = (cartItems,productToAdd)=>{
  const existingCartItem = cartItems.find(
    (cartItem)=>cartItem.id===productToAdd.id
    );
  if(existingCartItem){
    return cartItems.map(
      (cartItem)=>cartItem.id===productToAdd.id ?
      {...cartItem,quantity:cartItem.quantity+1}
      :cartItem
    )}
  return [...cartItems,{...productToAdd,quantity:1}];
}

const removeCartItem = (cartItems,productToRemove)=>{
  const filteredCartItems =  cartItems.filter((item)=>(
    item.id!==productToRemove.id
  ))
  return filteredCartItems
}

export const CartContext = createContext({
  isCartOpen:false,
  setIsCartOpen:()=>{},
  cartItems:[],
  addItemToCart:()=>{},
  removeItemFromCart:()=>{},
  reduceItemFromCart:()=>{},
  cartCount:0,
  totalPrice:0,
})

export const CartProvider = ({children}) =>{
  const [isCartOpen,setIsCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);
  useEffect(()=>{
    const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
    setCartCount(newCartCount)
  },[cartItems])

  useEffect(()=>{
    const newTotalPrice = cartItems.reduce((total,cartItem)=>(total+cartItem.price*cartItem.quantity),0);
    setTotalPrice(newTotalPrice)
  },[cartItems])

  const addItemToCart = (productToAdd)=>{
    setCartItems(addCartItem(cartItems,productToAdd));
  }

  const removeItemFromCart = (productToRemove)=>{
    setCartItems(removeCartItem(cartItems,productToRemove));
  }

  const reduceItemFromCart = (productToReduce)=>{
    setCartItems(reduceCartItem(cartItems,productToReduce));
  }
  const value = {isCartOpen,setIsCartOpen,addItemToCart,removeItemFromCart,reduceItemFromCart,cartItems,cartCount,totalPrice};
  
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}