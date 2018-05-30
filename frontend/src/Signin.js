import React, { Component } from 'react';
import './App.css';
import * as routes from './constants/routes';
import {
    Form,
    FormGroup,
    Input,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    // auth.doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState(() => ({ ...INITIAL_STATE }));
    //     history.push(routes.ACCOUNT);
    //   })
    //   .catch(error => {
    //     this.setState(byPropKey('error', error));
    //   });

    event.preventDefault();
  }
  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    return (
      <div className="App img">
        <Container>
          <Row>
            <Col>
              <h1 className="title">Leave!</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
          <Form className="form">   
            <FormGroup> 
              <Input 
                value={this.state.value}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </FormGroup>
            <FormGroup>  
              <Input
                value={this.state.value}
                onChange={event => this.setState(byPropKey('name', event.target.value))}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </FormGroup>
            <Button 
              className="SIB"
            >Sign In!
            </Button>
          </Form> 
          </Row> 
        </Container> 
        <Container>
          <Row>
            <Col>
              <footer className="signinfoot">
              © 2018 BDABRK. All rights reserved.
              </footer>
            </Col>
          </Row>
        </Container>   
      </div>
    );
  }
}

export default (SignInPage);

export {
  SignInForm,
};