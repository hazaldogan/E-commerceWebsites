import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
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
      </Switch>
    </div>
  );
}
