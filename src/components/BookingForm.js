// src/components/BookingForm.js
import React, { useState } from 'react';


const BookingForm = ({ addBooking }) => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    busNumber: '',
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.busNumber) return;
    addBooking(formData); // Call the addBooking function to add the booking
    setFormData({ name: '', email: '', phone: '', busNumber: '' }); // Reset form
  };

  return (
    <div className="booking-form">
      <h2>Book Your Seat</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Bus Number Dropdown */}
        <div>
          <label htmlFor="busNumber">Bus Number:</label>
          <select
            id="busNumber"
            name="busNumber"
            value={formData.busNumber}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Bus Number</option>
            <option value="Bus 1">Bus 1</option>
            <option value="Bus 2">Bus 2</option>
            <option value="Bus 3">Bus 3</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
