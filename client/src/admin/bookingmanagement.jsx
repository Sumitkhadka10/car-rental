import React, { useState } from 'react';
import './styles/bookingmanagement.css';


const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      bookedBy: 'Ram narayan',
      amountPaidNPR: 5900, 
      paymentMethod: 'Credit Card',
      car: 'Toyota Camry',
      days: 5,
      dropLocation: 'Airport',
      canceled: false,
      cancellationReason: '',
      approved: false,
      messageSent: false,
    },
    {
      id: 2,
      bookedBy: 'Hari Gopal',
      amountPaidNPR: 7000, 
      paymentMethod: 'Esewa',
      car: 'Honda Civic',
      days: 3,
      dropLocation: 'Hotel',
      canceled: false,
      cancellationReason: '',
      approved: false,
      messageSent: false,
    },
  ]);

  const handleCancelBooking = (id) => {
    const bookingIndex = bookings.findIndex(booking => booking.id === id);
    if (bookingIndex !== -1 && bookings[bookingIndex].cancellationReason) {
      const updatedBookings = [...bookings];
      updatedBookings[bookingIndex].canceled = true;
      setBookings(updatedBookings);
    } else {
      alert('Please provide a reason for cancellation.');
    }
  };

  const handleApproveBooking = (id) => {
    const updatedBookings = bookings.map(booking => {
      if (booking.id === id) {
        return {
          ...booking,
          approved: true,
          messageSent: true, // Message sent after approval
        };
      }
      return booking;
    });
    setBookings(updatedBookings);
  };

  const handleCancellationReasonChange = (id, reason) => {
    const updatedBookings = bookings.map(booking => {
      if (booking.id === id) {
        return {
          ...booking,
          cancellationReason: reason,
        };
      }
      return booking;
    });
    setBookings(updatedBookings);
  };

  const handleSendMessage = (id) => {
    console.log('Message sent to user with ID:', id);
  };

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
            <th>Action</th>
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
              <td>
                {!booking.canceled && !booking.approved && (
                  <>
                    <button onClick={() => handleApproveBooking(booking.id)} className="approve-button">Approve</button>
                    <button onClick={() => handleCancelBooking(booking.id)} className="cancel-button">Cancel</button>
                    <textarea
                      placeholder="Reason for cancellation"
                      value={booking.cancellationReason}
                      onChange={(e) => handleCancellationReasonChange(booking.id, e.target.value)}
                    />
                  </>
                )}
                {booking.canceled && <span>Canceled</span>}
                {booking.approved && <span>Approved</span>}
                {booking.approved && !booking.messageSent && (
                  <button onClick={() => handleSendMessage(booking.id)} className="send-message-button">Send Message</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagement;
