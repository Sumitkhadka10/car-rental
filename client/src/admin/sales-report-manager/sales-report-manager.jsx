import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { fetchReservations } from "../../hooks/useFetchData";
import { fetchBrands, fetchModels, fetchCars } from "../../hooks/useFetchData";
import { loadingContent } from "../../components/general/general-components";

const SalesReport = () => {
    const [totalProfit, setTotalProfit] = useState(0);
    const [rentedCarsCount, setRentedCarsCount] = useState(0);
    const [totalBrands, setTotalBrands] = useState(0);
    const [totalCars, setTotalCars] = useState(0);
    const [totalModels, setTotalModels] = useState(0);
    const [availableCarsCount, setAvailableCarsCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchReservations().then(reservations => {
            if (reservations) {
                let totalProfit = 0;
                let rentedCarsCount = 0;
                reservations.forEach(reservation => {
                    totalProfit += reservation.price;
                    rentedCarsCount += 1;
                });
                setTotalProfit(totalProfit);
                setRentedCarsCount(rentedCarsCount);
            }
            setIsLoading(false);
        });

        fetchBrands().then(brands => {
            if (brands) {
                setTotalBrands(Object.keys(brands).length);
            }
        });

        fetchModels().then(models => {
            if (models) {
                setTotalModels(Object.keys(models).length);
            }
        });

        fetchCars().then(cars => {
            if (cars) {
                setTotalCars(Object.keys(cars).length);
                // Calculate available cars count after rentals
                const availableCarsCount = Object.values(cars).reduce((acc, car) => acc + car.carCount, 0) - rentedCarsCount;
                setAvailableCarsCount(availableCarsCount);
            }
        });
    }, [rentedCarsCount]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Vehicles Report</Card.Title>
                <Card.Text>
                    <strong>Total Cars Rented:</strong> {rentedCarsCount}
                </Card.Text>
                <Card.Text>
                    <strong>Total Brands:</strong> {totalBrands}
                </Card.Text>
                <Card.Text>
                    <strong>Total Models:</strong> {totalModels}
                </Card.Text>
                <Card.Text>
                    <strong>Available Cars After Rental:</strong> {availableCarsCount}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SalesReport;
