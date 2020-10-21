import React, { Component } from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    super()
    this.state= {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }
  render() {
    return (
      <form onChange={this.handleChange}>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="date mm/dd"/>
        <input type="text" placeholder="time h:mm"/>
        <input type="number" min="1" placeholder="num. of guests"/>
        <button>reserve</button>
      </form>
    )
  }
}
export default ReservationForm;
