import React, { useState } from 'react';
import './styles/bookingmanagement.css';

const BookingManagement = () => {
  const [bookings] = useState([
    {
      id: 1,
      bookedBy: 'John Doe',
      amountPaidNPR: 5900, 
      paymentMethod: 'Credit Card',
      car: 'Toyota Camry',
      days: 5,
      dropLocation: 'Airport',
    },
    {
      id: 2,
      bookedBy: 'Jane Smith',
      amountPaidNPR: 7000, 
      paymentMethod: 'Esewa',
      car: 'Honda Civic',
      days: 3,
      dropLocation: 'Hotel',
    },
  ]);

  return (
    <div className="container">
      <h2>Booking Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Booked By</th>
            <th>Amount Paid (NPR)</th>
            <th>Paid Through</th>
            <th>Car Booked</th>
            <th>Days</th>
            <th>Drop Location</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.bookedBy}</td>
              <td>
                {booking.amountPaidNPR >= 5000
                  ? booking.amountPaidNPR
                  : "NPR 5000 (Minimum booking amount)"}
              </td>
              <td>{booking.paymentMethod}</td>
              <td>{booking.car}</td>
              <td>{booking.days}</td>
              <td>{booking.dropLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagement;
