import { Routes, Route } from 'react-router-dom'
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication';
import Shop from './components/routes/shop/shop.component.jsx'
import Checkout from './components/routes/checkout/checkout-component';

import { useEffect } from 'react';



import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user))
    });

    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}
export default App;
