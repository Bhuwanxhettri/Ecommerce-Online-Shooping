import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import SingIn from "./common/auth/SingIn";
import List from "./components/orderList/List"

function App() {
  return (
    <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Pages />
            </Route>
            <Route path="/login" exact>
              <SingIn />
            </Route>
            <Route path="/orderHistory" exact>
               <List/>
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </Router>
    </>
  );
}

export default App;
