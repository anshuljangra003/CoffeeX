import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useState, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [total, settotal] = useState(0);

  useEffect(() => {
    // console.log("Hey im useeffect");
    if(localStorage.getItem("cart")){
      setcart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")))
    }
  }, []);

  const saveCart = (mycart) => {
    localStorage.setItem("cart",JSON.stringify(mycart));
    let subt = 0;
    let key = Object.keys(mycart);
    for (let i = 0; i< key.length; i++) {
      subt += mycart[key[i]].qty * mycart[key[i]].price;
    }
    settotal(subt);
  };

  

  
  const clearCart = () => {
    setcart({});
    saveCart({});
  };

  const removeFromCart = (name, itemcode, qty, price, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
    }
    if (newCart[itemcode]["qty"]<= 0) {
      delete newCart[itemcode];
    } 
    setcart(newCart);
    saveCart(newCart)
  };

  const addToCart = (itemcode,name, qty, price, variant) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty;
    } 
    else {
      newCart[itemcode]={name,qty:1,price,variant} 
    }
    setcart(newCart);
    // console.log(newCart)
    saveCart(newCart);
  };
  return (
    <>
      <Navbar
        key={cart}
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        clearCart={clearCart}
        total={total}
      />
      <Component
        
        cart={cart}
        removeFromCart={removeFromCart}
          addToCart={addToCart}  
        clearCart={clearCart}
        total={total}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
