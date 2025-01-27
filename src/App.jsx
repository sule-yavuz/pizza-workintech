import React, { useState } from "react";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [orderData, setOrderData] = useState(null);

  const goToPage = (page) => setCurrentPage(page);

  return (
    <div>
      {currentPage === "home" && <Home goToPage={goToPage} />}
      {currentPage === "orderForm" && (
        <OrderForm goToPage={goToPage} setOrderData={setOrderData} />
      )}
      {currentPage === "orderConfirmation" && <OrderConfirmation orderData={orderData} />}
    </div>
  );
}

export default App;