import { Router } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import styles  from './App.css';

function App() {
  return <BrowserRouter>
    <header></header>
    <main>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/signup" exact></Route>
        <Route path="/login" exact></Route>
        <Route path="/dishes" exact></Route>
        <Route path="/desserts" exact></Route>
        <Route path="/drinks" exact></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </main>
        <footer></footer>
  </BrowserRouter>
}

export default App;
