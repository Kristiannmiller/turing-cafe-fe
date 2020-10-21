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
  handleChange = (event) => {
    this.setState( {[event.target.name]: event.target.value} )
  }
  render() {
    return (
      <form onChange={this.handleChange}>
        <input name="name" type="text" placeholder="name"/>
        <input name="date" type="text" placeholder="date mm/dd"/>
        <input name="time" type="text" placeholder="time h:mm"/>
        <input name="number" type="number" min="1" placeholder="num. of guests"/>
        <button onClick={this.props.addRes}>reserve</button>
      </form>
    )
  }
}
export default ReservationForm;
