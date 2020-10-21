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
      <form>
        <input/>
        <input/>
        <input/>
        <input/>
        <button>reserve</button>
      </form>
    )
  }
}
export default ReservationForm;
