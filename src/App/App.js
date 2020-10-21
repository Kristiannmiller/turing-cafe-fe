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
  addReservation = async (resInfo) => {
    const newRes = await apiCalls.postReservation(resInfo)
    if(newRes.id) {
      this.setState( {reservations: [...this.state.reservations, newRes]} )
    } else {
      return newRes
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
          <ReservationForm addRes={this.addReservation}/>
        </div>
        <div className='resy-container'>
          {cards}
        </div>
      </div>
    )
  }
}

export default App;
