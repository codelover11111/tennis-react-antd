import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.less";
import "./styles/_app.scss";

import Home from "./app/view/Home";
import Main from "./app/view/Main";
import Loading from "./app/view/Loading";


function App() {
  const dispatch = useDispatch();
  const [closedDebug, setClose] = useState(false);
  const [loading, setLoading] = useState(true);

  const pageLoading = Loading();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/main"} component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
