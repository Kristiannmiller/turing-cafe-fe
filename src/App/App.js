import React, { Component } from 'react';
import './App.css';
import apiCalls from '../apiCalls.js'
import ReservationCard from '../ReservationCard/ReservationCard.js'
import ReservationForm from '../ReservationForm/ReservationForm.js'

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
    const cards = this.state.reservations.map((reservation, i) => {
      return (
      <ReservationCard
        key={i}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />)
    })
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm />
        </div>
        <div className='resy-container'>
          {cards}
        </div>
      </div>
    )
  }
}

export default App;
