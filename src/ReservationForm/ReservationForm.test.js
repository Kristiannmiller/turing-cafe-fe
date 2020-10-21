import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ReservationForm from './ReservationForm.js';
import { handleChange } from './ReservationForm.js';
import { BrowserRouter } from 'react-router-dom';
// jest.mock('./ReservationForm.js');

describe('ReservationForm', () => {
  it('should render a reservation card', () => {
    render(
      <BrowserRouter>
        <ReservationForm />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('date mm/dd')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('time h:mm')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('num. of guests')).toBeInTheDocument();
    expect(screen.getByText('Make Reservation')).toBeInTheDocument();
  })

  // it('should fire a function for every input change', () => {
  //   const fakeHandleChange = jest.mock(handleChange)
  //   render(
  //     <BrowserRouter>
  //       <ReservationForm />
  //     </BrowserRouter>
  //   );
  //   const nameInput = waitFor(() => screen.getByPlaceholderText('name'))
  //   userEvent.type(nameInput, 'Kristi');
  //   expect(fakeHandleChange).toHaveBeenCalledTimes(6)
  //   userEvent.type(screen.getByPlaceholderText('date mm/dd'), '10/22');
  //   userEvent.type(screen.getByPlaceholderText('time h:mm'), '8:00');
  //   userEvent.type(screen.getByPlaceholderText('num. of guests'), '4');
  //
  // })
})
