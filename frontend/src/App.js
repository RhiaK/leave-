import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './Landing';
import SignUpPage from './Signup';
import SignInPage from './Signin';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Destinations from './Destinations';

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