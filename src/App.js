import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Accueil from "./accueil/pages/Accueil";
import Login from "./users/pages/Login";
import Signup from "./users/pages/Signup";
import MainHeader from "./shared/components/MainHeader";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <MainHeader/>
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
          <Route path="/dishes" exact></Route>
          <Route path="/desserts" exact></Route>
          <Route path="/drinks" exact></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
