import React from "react";

function OrderConfirmation({ orderData }) {
  return (
    <div
      style={{
        backgroundColor: "#CE2829",
        height: "100vh",
        width: "100vw",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: "1rem", 
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: "0.5rem 0", fontWeight: "bold", color: "white", textAlign: "center" }}>
        Teknolojik Yemekler
      </h1>

      <h2
        style={{
          fontSize: "1.5rem", 
          margin: "0.5rem 0",
          color: "#FDC913",
          fontFamily: "'Satisfy', cursive",
          textAlign: "center",
        }}
      >
        Lezzetin yolda
      </h2>

      <h3
        style={{
          fontSize: "1.5rem", 
          margin: "1rem 0",
          fontFamily: "'Barlow', sans-serif",
          textAlign: "center",
        }}
      >
        SİPARİŞİNİZ ALINDI!
      </h3>

      {orderData ? (
        <div style={{ marginTop: "1.5rem", textAlign: "left", maxWidth: "90%", width: "100%" }}>
          <p><strong>Boyut:</strong> {orderData.size}</p>
          <p><strong>Hamur:</strong> {orderData.dough}</p>
          <p><strong>Malzemeler:</strong> {orderData.toppings.join(", ")}</p>
          <p><strong>Adet:</strong> {orderData.quantity}</p>
          <p><strong>Sipariş Notu:</strong> {orderData.notes || "Belirtilmedi"}</p>
        </div>
      ) : (
        <p>Bir hata oluştu.</p>
      )}

      <div style={{ marginTop: "1.5rem", textAlign: "left", maxWidth: "90%", width: "100%" }}>
        <h3 style={{ margin: "1rem 0", fontSize: "1.5rem" }}>SİPARİŞ TOPLAMI</h3>
        <p style={{ margin: "0.5rem 0" }}><strong>Seçimler:</strong> 25.00₺</p>
        <p style={{ margin: "0.5rem 0" }}><strong>Toplam:</strong> 110.50₺</p>
      </div>
    </div>
  );
}

export default OrderConfirmation;