import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ReservationForm from './ReservationForm.js';
import { BrowserRouter } from 'react-router-dom';

describe('ReservationForm', () => {
  it('should render a reservation card', () => {
    const testRes = {id: 1, name: 'Kristi', date: '10/21', time: '7:00', number: 3 }
    render(
      <BrowserRouter>
        <ReservationForm
        />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('date mm/dd')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('time h:mm')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('num. of guests')).toBeInTheDocument();
  })
})
