import {CheckoutItemContainer,ImageContainer} from './checkout-item.styles.jsx'
import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart,reduceItemFromCart,removeItemFromCart } from '../../store/cart/cart.action.js';

const CheckoutItem = ({cartItem})=>{
  const {name,imageUrl,price,quantity} = cartItem;
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const clearItemHandler = ()=>dispatch(removeItemFromCart(cartItems,cartItem))
  const addItemHandler = ()=>dispatch(addItemToCart(cartItems,cartItem))
  const reduceItemHandler = ()=>dispatch(reduceItemFromCart(cartItems,cartItem))
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={reduceItemHandler}>&#10094;</div>
        <div className='value'>{quantity}</div>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem