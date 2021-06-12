import "./styles/main.scss"
import Home from './pages/Home/Home';
import Products from "./pages/Product/Products"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="main-header">
        <Header />
        <NavBar />
      </header>
      <Switch>
      <Route path="/dhoklawalas"><Home/></Route>
      <Route exact path="/products"><Products/></Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
