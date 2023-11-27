import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import { Switch, Route } from "react-router-dom";

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
      </Switch>
    </div>
  );
}
