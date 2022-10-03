import {ProductCardContainer} from './product-card.styles.jsx'
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component'
import { useDispatch,useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const ProductCard = ({product})=>{
  const {name,price,imageUrl} = product;
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const addProductToCart = ()=> dispatch(addItemToCart(cartItems,product))
  return (
  <ProductCardContainer>
    <img src={imageUrl} alt={`${name}`} />
    <div className='footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <Button button_type={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
  </ProductCardContainer>
  )
}

export default ProductCard