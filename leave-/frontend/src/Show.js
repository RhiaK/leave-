import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Button } from 'reactstrap';


class App extends Component {
  state = {
    todos: []
  };


  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

   
  render() {
    return (
      <div className="destlist">
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h6>{item.dest_title}</h6>
            <Button
            className="destbut">
            Select
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
