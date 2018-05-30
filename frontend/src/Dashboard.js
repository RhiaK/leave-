import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import {
    Container,
    Row,
    Col
} from 'reactstrap';


class Dashboard extends Component {
  render() {
    return (
      <div className="App img2">
        <Container className="nomargin">
          <Row>
            <Col>
            <Navigation />
            </Col>
            <Col>
            <h4>Coming Soon!</h4>
            </Col>
          </Row>
        </Container>  
        <Container className="foot">    
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

export default Dashboard;