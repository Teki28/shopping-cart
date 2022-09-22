import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem})=>{
  const {name,imageUrl,price,quantity} = cartItem;
  const {removeItemFromCart,addItemToCart,reduceItemFromCart} = useContext(CartContext)
  const clearItemHandler = ()=>removeItemFromCart(cartItem)
  const addItemHandler = ()=>addItemToCart(cartItem)
  const reduceItemHandler = ()=>reduceItemFromCart(cartItem)
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`}/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={reduceItemHandler}>&#10094;</div>
        <div className='value'>{quantity}</div>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
    </div>
  )
}

export default CheckoutItem