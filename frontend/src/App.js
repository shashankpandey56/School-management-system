import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Newschool from "./components/Newschool/Newschool";
import Updateschool from "./components/Updateschool/Updateschool";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/add-user">
            <Newschool />
          </Route>
          <Route exact path="/update-user/:id">
            <Updateschool />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
