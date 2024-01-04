import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import { Switch, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";
import ContactUs from "../pages/ContactUs";
import Signup from "../pages/Signup";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product-list">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}
