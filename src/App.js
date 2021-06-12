import "./styles/main.scss"
import Home from './pages/Home/Home';
import Products from "./pages/Product/Products"
import {HashRouter, Route, Switch} from "react-router-dom"
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";


function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="main-header">
        <Header />
        <NavBar />
      </header>
      <Switch>
      <Route exact path={process.env.PUBLIC_URL?process.env.PUBLIC_URL + '/': '/'}><Home/></Route>
      <Route  path={process.env.PUBLIC_URL? process.env.PUBLIC_URL+ '/products':'/products'}><Products/></Route>

      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
