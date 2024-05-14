import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/order.css";
import qrCodeImage1 from "../assets/images/qr.jpg";
import qrCodeImage2 from "../assets/images/qr2.jpg";

const OrderConfirmationPage = () => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const accountNumber = "7605600008665"; // Your account number
  const bankName = "Sanima Bank LTD."; // Your Bank Name

  const handleConfirmPayment = () => {
    // Display a confirmation message using the browser's native alert
    alert("Make sure you are paying the correct amount. Once paid, the order cannot be cancelled or refunded.");

    // Logic to handle payment confirmation (e.g., API call, etc.)
    // Once payment is confirmed, set the paymentConfirmed state to true
    setPaymentConfirmed(true);
  };

  return (
    <div className="order-confirmation-container">
      {paymentConfirmed ? (
        <>
          <h2 className="order-message">Your order has been successfully placed!</h2>
          <p>Once the admin approves your order, you will be confirmed.</p>
        </>
      ) : (
        <>
          <h2 className="order-message">Payment Confirmation</h2>
          <p>Please make sure you are paying the correct amount. Once paid, the order cannot be cancelled or refunded.</p>
          <button onClick={handleConfirmPayment}>Confirm Payment</button>
        </>
      )}

      <div className="bank-details-container">
        <h3>Transfer Payment to:</h3>
        <p>Account Number: {accountNumber}</p>
        <p>Bank Name: {bankName}</p>
        <p>Please transfer the payment to the above account.</p>
      </div>

      <div>
        <h3>Scan Images for Payment</h3>
        <div className="qr-code-container">
          <img src={qrCodeImage1} alt="QR Code 1 for Payment" className="scan-image" />
          <img src={qrCodeImage2} alt="QR Code 2 for Payment" className="scan-image" />
        </div>
      </div>

      <Link to="/home">Go back to Home</Link>
    </div>
  );
};

export default OrderConfirmationPage;
