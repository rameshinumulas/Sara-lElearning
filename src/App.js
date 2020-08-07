import React, { Fragment } from 'react';
import './App.css';
import Saralmain from './Components/Saralmain';
import Innersaral from './Components/innersaral';
import history from './Components/history';
import Header from './Components/Header';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


function App() {
  return (
      <Fragment>
        <Header />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Saralmain} />
            <Route exact path="/innersaral" component={Innersaral} />
          </Switch>
        </Router>
       
      </Fragment>
  );
}

export default App;





























