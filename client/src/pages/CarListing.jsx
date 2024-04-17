import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../UI/caritem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortOrder, setSortOrder] = useState(""); // State to track sort order

  const sortCars = () => {
    if (sortOrder === "low") {
      return carData.slice().sort((a, b) => a.price - b.price); // Sort low to high
    } else if (sortOrder === "high") {
      return carData.slice().sort((a, b) => b.price - a.price); // Sort high to low
    } else {
      return carData; // Return original array if no sorting selected
    }
  };

  const sortedCars = sortCars();

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <Helmet title="Cars">
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleSortChange} value={sortOrder}>
                  <option value="">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
