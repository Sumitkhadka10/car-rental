import React, { useState } from 'react';
import '../admin/styles/carmanagement.css';

const CarManagement = () => {
  const initialCars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', image: 'corolla.jpg', price: 20000 },
    { id: 2, brand: 'Honda', model: 'Civic', image: 'civic.jpg', price: 22000 },
    { id: 3, brand: 'Ford', model: 'Focus', image: 'focus.jpg', price: 18000 },
    { id: 4, brand: 'BMW', model: '3 Series', image: 'bmw.jpg', price: 35000 },
    { id: 5, brand: 'Audi', model: 'A4', image: 'audi.jpg', price: 40000 },
    { id: 6, brand: 'Mercedes-Benz', model: 'C-Class', image: 'mercedes.jpg', price: 45000 },
    { id: 7, brand: 'Chevrolet', model: 'Camaro', image: 'camaro.jpg', price: 30000 },
    { id: 8, brand: 'Nissan', model: 'Altima', image: 'altima.jpg', price: 25000 },
    { id: 9, brand: 'Volkswagen', model: 'Golf', image: 'golf.jpg', price: 22000 },
    { id: 10, brand: 'Hyundai', model: 'Elantra', image: 'elantra.jpg', price: 20000 },
    { id: 11, brand: 'Subaru', model: 'Impreza', image: 'impreza.jpg', price: 23000 },
    { id: 12, brand: 'Lexus', model: 'ES', image: 'lexus.jpg', price: 40000 },
    { id: 13, brand: 'Mazda', model: '3', image: 'mazda.jpg', price: 18000 },
    { id: 14, brand: 'Kia', model: 'Optima', image: 'optima.jpg', price: 19000 },
    { id: 15, brand: 'Tesla', model: 'Model 3', image: 'tesla.jpg', price: 50000 }
  ];

  const [cars, setCars] = useState(initialCars);
  const [searchQuery, setSearchQuery] = useState('');
  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    image: null,
    price: ''
  });
  const handleSearchInputChange = (event) => {
    const query = event.target.value.trim().toLowerCase();
    setSearchQuery(query);
    const filteredCars = initialCars.filter(car =>
      car.brand.toLowerCase().startsWith(query) ||
      car.model.toLowerCase().startsWith(query)
    );

    setCars(filteredCars);
  };

  const handleAddCar = () => {
    const id = cars.length + 1;
    const updatedCars = [...cars, { ...newCar, id }];
    setCars(updatedCars);
    setNewCar({ brand: '', model: '', image: null, price: '' }); 
  };

  // Function to edit car details
  const handleEditCar = (id) => {
    // Find the index of the car with the given id
    const carIndex = cars.findIndex(car => car.id === id);
    if (carIndex !== -1) {

      const updatedBrand = prompt('Enter the updated brand:');
      const updatedModel = prompt('Enter the updated model:');
      const updatedPrice = prompt('Enter the updated price:');
      
      // Update the car details if the user provided valid input
      if (updatedBrand && updatedModel && updatedPrice) {
        const updatedCars = [...cars];
        updatedCars[carIndex] = { ...updatedCars[carIndex], brand: updatedBrand, model: updatedModel, price: parseInt(updatedPrice) };
        setCars(updatedCars);
      }
    }
  };

  // Function to remove a car
  const handleRemoveCar = (id) => {
    // Filter out the car with the given id
    const updatedCars = cars.filter(car => car.id !== id);
    setCars(updatedCars);
  };

  return (
    <div className="car-management-container">
      <h2>Car Management</h2>
      <div className="add-car-form">
        <h3>Add New Car</h3>
        <input type="text" placeholder="Brand" value={newCar.brand} onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })} />
        <input type="text" placeholder="Model" value={newCar.model} onChange={(e) => setNewCar({ ...newCar, model: e.target.value })} />
        <input type="file" onChange={(e) => setNewCar({ ...newCar, image: e.target.files[0] })} />
        <input type="number" placeholder="Price" value={newCar.price} onChange={(e) => setNewCar({ ...newCar, price: e.target.value })} />
        <button className="button button-primary" onClick={handleAddCar}>Add Car</button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by brand or model"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="button button-primary">Search</button>
      </div>

      <div className="existing-cars">
        <h3>Existing Cars</h3>
        {cars.map(car => (
          <div key={car.id} className="car-item">
            <img src={car.image} alt={`${car.brand} ${car.model}`} />
            <div className="car-details">
              <h4>{car.brand} {car.model}</h4>
              <p>Price: NPR {car.price.toLocaleString()}</p>
              <button className="button button-secondary" onClick={() => handleEditCar(car.id)}>Edit</button>
              <button className="button button-secondary" onClick={() => handleRemoveCar(car.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarManagement;
