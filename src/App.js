import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Accueil from "./accueil/pages/Accueil";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";
import MainHeader from "./shared/components/MainHeader";
import Dishes from "./products/pages/Dishes";
import Desserts from "./products/pages/Desserts";
import Drinks from "./products/pages/Drinks";

function App() {
  return (
      <BrowserRouter>
      <MainHeader />
        <main>
          <Switch>
            <Route path="/" exact>
              <Accueil />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/dishes" exact><Dishes/></Route>
            <Route path="/desserts" exact><Desserts/></Route>
            <Route path="/drinks" exact><Drinks/></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
        <footer></footer>
      </BrowserRouter>
  );
}

export default App;
