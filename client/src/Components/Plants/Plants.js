import React, { Component } from 'react';
import './Plants.css';
import PlantCard from '../Plant/PlantCard';
import {Container, Row, Col } from 'reactstrap';

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
  render () {
    let plantCards = this.state.plants.map(plants => {
      return (
        <Col sm="4">
          <PlantCard plants={plants} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {plantCards}
        </Row>
      </Container>
    )
  }
}

export default Plants;
