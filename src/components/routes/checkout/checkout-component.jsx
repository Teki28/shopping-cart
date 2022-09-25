import {CheckoutContainer} from './checkout-styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/cart.context'
import CheckoutItem from '../../checkout-item/checkout-item.component'

const Checkout = ()=>{
  const {cartItems,totalPrice} = useContext(CartContext)
  return (
    <CheckoutContainer>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
        {cartItems.map((cartItem)=>(<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))}
      <span className='total'>Total:{totalPrice}</span>
    </CheckoutContainer>
  )
}

export default Checkout
