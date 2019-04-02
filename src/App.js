import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Admin from './pages/Admin';
import NotFoundPage from './pages/NotFoundPage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route path="/" component={HomePage} exact={true} />
              <Route path="/admin" component={Admin} />
              <Route component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
