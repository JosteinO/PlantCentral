import React, { Component } from 'react';
import './Plants.css';

class Plants extends Component {
  constructor(){
    super();
    this.state = {
      plants: []
    }
  }
  componentDidMount(){
    fetch('/api/plants')
      .then(res => res.json())
      .then(plants => this.setState({plants }, () => console.log('plants fetched..',
      plants)));
  }
  render() {
    return (
      <div>
        <h2>Plants</h2>
        <ul>
          {this.state.plants.map(plants =>
          <li key={plants._id}>{ plants.name } { plants.moisture }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Plants;
