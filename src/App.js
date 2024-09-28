// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './App.css'; // Optional for styling

const App = () => {
  // State to hold bookings
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('All');

  // Add a new booking
  const addBooking = (booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  // Edit an existing booking
  const editBooking = (index) => {
    const updatedName = prompt('Enter new name:', bookings[index].name);
    const updatedEmail = prompt('Enter new email:', bookings[index].email);
    const updatedPhone = prompt('Enter new phone number:', bookings[index].phone);
    const updatedBusNumber = prompt('Enter new bus number:', bookings[index].busNumber);

    setBookings((prevBookings) =>
      prevBookings.map((booking, i) =>
        i === index
          ? {
              ...booking,
              name: updatedName,
              email: updatedEmail,
              phone: updatedPhone,
              busNumber: updatedBusNumber,
            }
          : booking
      )
    );
  };

  // Delete an existing booking
  const deleteBooking = (index) => {
    setBookings((prevBookings) => prevBookings.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} />
      <BookingForm addBooking={addBooking} />
      <BookingList
        bookings={bookings}
        editBooking={editBooking}
        deleteBooking={deleteBooking}
        filter={filter}
      />
    </div>
  );
};

export default App;
