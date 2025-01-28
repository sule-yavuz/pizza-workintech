import React from "react";

function Home({ goToPage }) {
  const buttonStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#FDC913",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      textAlign: "center",
      padding: "2rem",
      backgroundImage: "url('./images/iteration-1-images/home-banner.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover", 
      backgroundPosition: "center top",
      height: "100vh",
      width: "100vw",
      margin: 0,
      overflow: "hidden",
    }}>
      <div style={{ marginTop: "2rem", zIndex: 1 }}>
        <h1 style={{ color: "white", fontSize: "2.5rem" }}>Teknolojik Yemekler</h1>
        <p style={{ color: "white", fontSize: "1.5rem" }}>KOD ACIKTIRIR</p>
        <p style={{ color: "white", fontSize: "1.5rem" }}>PİZZA, DOYURUR</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem 0", zIndex: 1 }}>
        <button onClick={() => goToPage("orderForm")} style={buttonStyle}>
          ACIKTIM
        </button>
      </div>
      </div>
   
  );
}

export default Home;