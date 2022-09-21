import { Outlet,Link } from "react-router-dom"
import { Fragment ,useContext} from "react"
import './navigation.styles.scss'
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
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrownLogo className="logo" />
        </Link>   
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            Shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to="/auth">SIGN IN</Link>
            )
          }
          <Link className="nav-link" to='/auth'>
            Sign In
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation