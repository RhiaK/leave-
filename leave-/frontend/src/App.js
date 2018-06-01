// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
//
// import LandingPage from './Landing';
// import SignUpPage from './Signup';
// import SignInPage from './Signin';
// import Dashboard from './Dashboard';
// import Profile from './Profile';
// import Destinations from './Destinations';
// import SignOutButton from './Signout';
//
// import './App.css';
//
// import * as routes from './constants/routes';
//
// class App extends Component {
//   render() {
//
//     return (
//       <div>
//         <Router>
//           <div>
//             <Route
//               exact path={routes.LANDING}
//               component={() => <LandingPage />}
//             />
//             <Route
//               exact path={routes.SIGN_UP}
//               component={() => <SignUpPage />}
//             />
//             <Route
//               exact path={routes.SIGN_IN}
//               component={() => <SignInPage />}
//             />
//             <Route
//               exact path={routes.DASHBOARD}
//               component={() => <Dashboard />}
//             />
//             <Route
//               exact path={routes.PROFILE}
//               component={() => <Profile />}
//             />
//             <Route
//               exact path={routes.DESTINATIONS}
//               component={() => <Destinations />}
//             />
//             <Route
//               exact path={routes.SIGNOUT}
//               component={() => <SignOutButton />}
//             />
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }
//
//
//
// export default App;


import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {auth} from "./actions";
import ponyApp from "./reducers";

import PonyNote from "./components/PonyNote";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import Login from "./components/Login";

let store = createStore(ponyApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {

    componentDidMount() {
        this.props.loadUser();
    }

    PrivateRoute = ({component: ChildComponent, ...rest}) => {
        return <Route {...rest} render={props => {
            if (this.props.auth.isLoading) {
                return <em>Loading...</em>;
            } else if (!this.props.auth.isAuthenticated) {
                return <Redirect to="/login" />;
            } else {
                return <ChildComponent {...props} />
            }
        }} />
    }

    render() {
        let {PrivateRoute} = this;
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path="/" component={PonyNote} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            return dispatch(auth.loadUser());
        }
    }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        )
    }
}
