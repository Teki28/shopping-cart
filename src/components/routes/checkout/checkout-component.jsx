import {CheckoutContainer} from './checkout-styles.jsx'
import { useSelector } from 'react-redux'
import { selectCartItems,selectCartTotal } from '../../../store/cart/cart.selector.js'
import PaymentForm from '../../payment-form/payment-form.component.jsx'
import CheckoutItem from '../../checkout-item/checkout-item.component'

const Checkout = ()=>{
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
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
      <span className='total'>Total:{cartTotal}</span>
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default Checkout
