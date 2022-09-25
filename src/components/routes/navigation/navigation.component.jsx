import { Outlet} from "react-router-dom"
import { Fragment ,useContext} from "react"
import { NavigationContainer, NavLinks,NavLink,LogoContainer } from "./navigation.styles"
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg'
import { UserContext } from "../../../contexts/user.context"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown"
import { CartContext } from "../../../contexts/cart.context"

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const signOutHandler = async ()=>{
    await signOutUser();
  }
  const {isCartOpen} = useContext(CartContext);
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className="logo" />
        </LogoContainer>   
        <NavLinks>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )
          }
          {/* <NavLink to='/auth'>
            Sign Up
          </NavLink> */}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation