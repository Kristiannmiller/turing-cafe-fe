import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ReservationCard from './ReservationCard.js';
import { BrowserRouter } from 'react-router-dom';

describe('ReservationCard', () => {
  it('should render a reservation card', () => {
    const testRes = {id: 1, name: 'Kristi', date: '10/21', time: '7:00', number: 3 }
    render(
      <BrowserRouter>
        <ReservationCard
          key={testRes.id}
          name={testRes.name}
          date={testRes.date}
          time={testRes.time}
          number={testRes.number}
        />
      </BrowserRouter>
    );

    expect(screen.getByText('Kristi')).toBeInTheDocument();
    expect(screen.getByText('date: 10/21')).toBeInTheDocument();
    expect(screen.getByText('time: 7:00')).toBeInTheDocument();
    expect(screen.getByText('guests: 3')).toBeInTheDocument();
  })
})
