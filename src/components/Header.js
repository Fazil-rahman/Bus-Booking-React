// src/components/Header.js
import React from 'react';

const Header = ({ filter, setFilter }) => {
  return (
    <div className="header">
      <h1>Bus Booking</h1>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All Buses</option>
        <option value="Bus 1">Bus 1</option>
        <option value="Bus 2">Bus 2</option>
        <option value="Bus 3">Bus 3</option>
      </select>
    </div>
  );
};

export default Header;
