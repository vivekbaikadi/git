import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './InUp.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductDetails from './Pages/ProductDetails';
import ShoppingApp from './Components/ShoppingApp';
import CartView from './Pages/CartView';
import SignIn from './Pages/SignIn';
import { createContext, useState } from 'react';


const MyContext = createContext();


function App() {

  const [isHeaderFooterShow,setisHeaderFooterShow] =useState(true);
  const [isLogin,setisLogin] =useState(false);
  const values = {
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setisLogin
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }
        
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/product/:id" exact={true} element={<ProductDetails />} />
          <Route path="/scan" exact={true} element={<ShoppingApp />} />
          <Route path="/cart" exact={true} element={<CartView />} />
          <Route path="/signIn" exact={true} element={<SignIn />} />

        </Routes>
        {
          isHeaderFooterShow === true && <Footer />
        }
        
      </MyContext.Provider>
    </BrowserRouter>

  );
}

export default App;

export { MyContext }