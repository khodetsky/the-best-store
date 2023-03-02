import { GlobalStyle } from './GlobalStyles';
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "../components/SharedLayout/SharedLayout";
import { MainPage } from "../pages/MainPage/MainPage";
import { Products } from "../pages/Products";
import { ProductDetails } from "../pages/ProductDetails";
import { Basket } from "../pages/Basket";
import { PersonalOffice } from "../pages/PersonalOffice";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { Category } from "../pages/Category";
import { auth } from '../components/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setUserIsLoggedIn, setUserEmail } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUserIsLoggedIn(true));
      dispatch(setUserEmail(user.email));
    }
  });

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<MainPage />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/categories/:category" element={<Category />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="products/categories/:category/:productId" element={<ProductDetails />} />
          <Route path="basket" element={<Basket />} />
          <Route path="personal-office" element={<PersonalOffice />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};
