import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './Landing';
import SignUpPage from './Signup';
import SignInPage from './Signin';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Destinations from './Destinations';

import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Home from "./containers/HomeContainer";
import Navbar from "./containers/NavbarContainer";
import DogList from "./containers/Secret/DogListContainer";
import { PrivateRoute } from "./customRoutes/ProtectedRoutes";
import rootReducer from "./reducers";
import auth_tokens_mw from "./customMiddleware/auth_tokens_mw";



import './App.css';

import * as routes from './constants/routes';

class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <div>
            <Route
              exact path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact path={routes.DASHBOARD}
              component={() => <Dashboard />}
            />
            {/* <PrivateRoute exact path="/secret" component={DogList} /> */}

            <Route
              exact path={routes.PROFILE}
              component={() => <Profile />}
            />
            <Route
              exact path={routes.DESTINATIONS}
              component={() => <Destinations />}
            />
          </div>
        </Router>
      </div>
    );
  }
}



export default App;