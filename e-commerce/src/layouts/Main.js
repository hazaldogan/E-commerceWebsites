import Home from "../pages/Home";
import { Switch, Route } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
