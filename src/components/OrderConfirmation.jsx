import React from "react";

function OrderConfirmation({ orderData }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Sipariş Onayı</h2>
      {orderData ? (
        <div>
          <p>İsim: {orderData.name}</p>
          <p>Boyut: {orderData.size}</p>
          <p>Malzemeler: {orderData.toppings.join(", ")}</p>
          <p>Notlar: {orderData.notes}</p>
        </div>
      ) : (
        <p>Bir hata oluştu.</p>
      )}
    </div>
  );
}

export default OrderConfirmation;