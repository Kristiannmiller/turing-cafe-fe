import React from 'react'
import './ReservationCard.css';

const ReservationCard = ( reservation ) => {
  return (
    <section className="resCard">
      <h1>name: {reservation.name}</h1>
      <h2>date: {reservation.date}</h2>
      <h3>time: {reservation.time}</h3>
      <h4>guests: {reservation.number}</h4>
    </section>
  )
}
export default ReservationCard;
