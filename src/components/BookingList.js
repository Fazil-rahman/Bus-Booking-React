// src/components/BookingList.js
import React from 'react';


const BookingList = ({ bookings, editBooking, deleteBooking, filter }) => {
  return (
    <div className="booking-list">
      <h2>Booking List</h2>
      {bookings
        .filter((booking) => filter === 'All' || booking.busNumber === filter)
        .map((booking, index) => (
          <div key={index} className="booking-item">
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking.phone}
            </p>
            <p>
              <strong>Bus Number:</strong> {booking.busNumber}
            </p>
            <button onClick={() => editBooking(index)}>Edit</button>
            <button onClick={() => deleteBooking(index)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default BookingList;
