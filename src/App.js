import "./styles/main.scss"
import React,{useState,useEffect} from "react"
import Home from './pages/Home/Home';
import Products from "./pages/Product/Products"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/Forms/LoginForm";
import ButtonContext from "./context/ButtonContext";
import RegisterForm from "./components/Forms/Register";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContextProvider";
import UserContextProvider from "./context/UserContextProvider"
import ProductContextProvider from "./context/ProductContextProvider"


function App() {

  const [loginButtonClicked,setLoginButtonClicked] = useState(false);
  const [registerButtonClicked,setRegisterButtonClicked] = useState(false);
  const [cartButtonClicked,setCartButtonClicked] = useState(false);

  //To make server start // to wake up
  useEffect(()=>{
      fetch(process.env.REACT_APP_ASSET_URL)

  },[])


  return (

    //can use basename="/dhoklawalas" as prop to browser router if we want to route in manner localhost:3000/dhoklwalas/home
    <BrowserRouter >
    <ButtonContext.Provider value={{setLoginButtonClicked,setRegisterButtonClicked,setCartButtonClicked}}>
    <CartContextProvider >
    <UserContextProvider >
    <ProductContextProvider>
    <div className="App">
      <header className="main-header">
        {cartButtonClicked && <Cart />}
        {loginButtonClicked && <LoginForm/>}
        {registerButtonClicked && <RegisterForm />}
        <Header />
        <NavBar />
      </header>
      <div className="space-occupier"></div>
      <Switch>
      <Route exact path= '/'><Home/></Route>
      <Route path='/products'><Products/></Route>
      </Switch>
      <Footer />
    </div>
    </ProductContextProvider>
    </UserContextProvider>
    </CartContextProvider>
    </ButtonContext.Provider>
    </BrowserRouter>
  );
}

export default App;
