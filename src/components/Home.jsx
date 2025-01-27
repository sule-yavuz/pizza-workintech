import React from "react";

function Home({ goToPage }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Teknolojik Yemekler</h1>
      <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
      <button onClick={() => goToPage("orderForm")}>ACIKTIM</button>
    </div>
  );
}

export default Home;