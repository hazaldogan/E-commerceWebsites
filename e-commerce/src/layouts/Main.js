import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import { Switch, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";
import ContactUs from "../pages/ContactUs";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import ProtectedPage from "../components/ProtectedPage";
import Order from "../pages/Order";
import OrderList from "../pages/OrderList";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shopping/:gender?/:category?">
          <ProductList />
        </Route>
        <Route
          exact
          path="/shopping/:gender/:category/:productId/:productNameSlug"
        >
          <Product />
        </Route>
        <Route exact path="/aboutus">
          <AboutUs />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/order">
          <ProtectedPage pageComponent={Order} fromURL={"/order"} />
        </Route>
        <Route exact path="/order">
          <ProtectedPage pageComponent={OrderList} fromURL={"/orderlist"} />
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
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
