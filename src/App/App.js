import React, { Component } from 'react';
import './App.css';
import apiCalls from '../apiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: []
    }
  }
  async componentDidMount() {
    const allReservations = await apiCalls.getAllReservations()
    this.setState({reservations: allReservations})
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
