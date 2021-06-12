import "./styles/main.scss"
import Home from './pages/Home/Home';
import Products from "./pages/Product/Products"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";


function App() {
  return (

    //can use basename="/dhoklawalas" as prop to browser router if we want to route in manner localhost:3000/dhoklwalas/home
    <BrowserRouter >
    <div className="App">
      <header className="main-header">
        <Header />
        <NavBar />
      </header>
      <Switch>
      <Route  exact path= '/'><Home/></Route>
      <Route path='/products'><Products/></Route>
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
