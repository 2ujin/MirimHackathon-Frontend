import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
