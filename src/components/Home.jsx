import React from "react";

function Home({ goToPage }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Teknolojik Yemekler</h1>
      <p>KOD ACIKTIRIR PIZZA, DOYURUR</p>

    
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem 0" }}>
        <button onClick={() => goToPage("orderForm")} style={buttonStyle}>
          ACIKTIM
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  backgroundColor: "#FDC913",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Home;