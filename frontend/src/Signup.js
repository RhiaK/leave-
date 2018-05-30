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


const SignUpPage = ({ history }) =>
  <div>

    <SignUpForm history={ history }></SignUpForm>   

  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
      super(props);

    this.state = { ...INITIAL_STATE };

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
  }

  onSubmit = (e) => {
      const {
        email,
        password,
      } = this.state;

      const {
        history,
      } = this.props;

      // db.doCreateUserWithEmailAndPassword(email, password)
      //   .then(authUser => {
      //     this.setState(() => ({ ...INITIAL_STATE }));
      //     history.push(routes.DASHBOARD);
      //   })
      //   .catch(error => {
      //     this.setState(byPropKey('error', error));
      //   });

      e.preventDefault();
  }


  render() {
    const {
        name,
        email,
        password,
        phone,
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
                type="name"
                value={this.state.value}
                onChange={event => this.setState(byPropKey('name', event.target.value))}
                name="name"
                placeholder="Enter your name"
              />
            </FormGroup>    
            <FormGroup> 
              <Input 
                type="email"
                value={this.state.value}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                name="email"
                placeholder="Enter your email address"
              />
            </FormGroup>
            <FormGroup>  
              <Input
                type="password"
                value={this.state.value}
                onChange={event => this.setState(byPropKey('password', event.target.value))}
                name="password"
                placeholder="Enter your password"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="phone"
                value={this.state.value}
                onChange={event => this.setState(byPropKey('phone', event.target.value))}
                name="phone"
                placeholder="Enter your phone number"
              />
            </FormGroup>
            <Button className="SUB">Sign Up!</Button>
            { error && <p>{error.message}</p> }
          </Form> 
          </Row> 
        </Container> 
        <Container>
          <Row>
            <Col>
              <footer>
              © 2018 BDABRK. All rights reserved.
              </footer>
            </Col>
          </Row>
        </Container>   
      </div>
    );
  }
}

export default SignUpPage;
export {
  SignUpForm,
}