import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Albums from "./pages/Albums";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import AddItem from "./pages/addItem";
import './app.css';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Albums} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/additem" component={AddItem} />
          <Route exact path="/albums/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
