import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/carlisting.css';

const CarDetails = () => {
  const [cars, setCars] = useState([]);
  const [sortedCars, setSortedCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch cars data from the admin side
    axios.get('http://localhost:3000/api/cars') // Replace 'http://localhost:3000/api/cars' with your actual endpoint
      .then(response => {
        setCars(response.data);
        setSortedCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  const handleSortByPrice = () => {
    const sorted = [...cars].sort((a, b) => a.price - b.price);
    setSortedCars(sorted);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    const filteredCars = cars.filter(car =>
      car.brand.toLowerCase().includes(event.target.value.toLowerCase()) ||
      car.model.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSortedCars(filteredCars);
  };

  return (
    <div className="car-details-container">
      <h2>Available Cars</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by brand or model"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="button button-secondary" onClick={handleSortByPrice}>Sort by Price</button>
      </div>
      <div className="existing-cars">
        {sortedCars.map(car => (
          <div key={car.id} className="car-item">
            <img src={car.image} alt={`${car.brand} ${car.model}`} />
            <div className="car-details">
              <h3>{car.brand} {car.model}</h3>
              <p>Price: NPR {car.price.toLocaleString()}</p>
              <button className="button button-secondary">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
