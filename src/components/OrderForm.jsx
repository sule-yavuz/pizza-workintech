import React, { useState } from 'react';
import axios from 'axios';
import CustomCheckbox from './CustomCheckbox';

function OrderForm({ goToPage, setOrderData }) {
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [toppings, setToppings] = useState({
    "Pepperoni": false,
    "Sucuk": false,
    "Mantar": false,
    "Tavuk Izgara": false,
    "Mısır": false,
    "Kanada Jambonu": false,
    "Jalepeno": false,
    "Domates": false,
    "Ananas": false,
    "Biber": false,
    "Sarımsak": false,
    "Kabak": false,
    "Sosis": false,
  });
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleCheckboxChange = (topping) => {
    setToppings((prev) => ({
      ...prev,
      [topping]: !prev[topping],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedToppings = Object.keys(toppings).filter(topping => toppings[topping]);

    const order = {
      size,
      dough,
      toppings: selectedToppings,
      notes,
      quantity,
    };

    try {
      const response = await axios.post('https://reqres.in/api/pizza', order);
      console.log(response.data);
      setOrderData(order);
      goToPage('orderConfirmation');
    } catch (error) {
      console.error("Sipariş gönderim hatası:", error);
    }
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#FDC913",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "0.5rem",
  };

  const headerStyle = {
    backgroundColor: "#CE2829",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontWeight: "bold",
    width: '100%',
    position: 'relative',
    top: 0,
  };

  const titleStyle = {
    color: "white",
    margin: 0,
    fontSize: "1.5rem",
  };

  const subHeaderStyle = {
    color: "white",
    fontSize: "1rem",
    textAlign: "left",
    margin: "0",
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: "2rem",
      height: "100vh",
      width: "100vw",
      margin: 0,
      overflowY: "auto",
    }}>

      <div style={headerStyle}>
        <h1 style={titleStyle}>Teknolojik Yemekler</h1>
        <h4 style={subHeaderStyle}>ANASAYFA-SEÇENEKLER-SİPARİŞ OLUŞTUR</h4>
      </div>

     
      <div style={{ textAlign: "center", padding: "2rem", maxWidth: '600px', width: '100%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Position Absolute Acı Pizza</p>

        <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.5rem', marginRight: '1rem' }}>85.50₺</span>
          <span style={{ marginRight: '0.5rem' }}>4.9</span>
          <span>(200)</span>
        </div>

        <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizza bazen pizzetta denir.</p>

        <form onSubmit={handleSubmit}>
      
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ flex: 1, marginRight: '1rem' }}>
              <label style={{ textAlign: 'left', display: 'block', marginBottom: '0.5rem' }}>Boyut Seç:</label>
              <CustomCheckbox label="Küçük" checked={size === 'küçük'} onChange={() => setSize('küçük')} />
              <CustomCheckbox label="Orta" checked={size === 'orta'} onChange={() => setSize('orta')} />
              <CustomCheckbox label="Büyük" checked={size === 'büyük'} onChange={() => setSize('büyük')} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ textAlign: 'left', display: 'block', marginBottom: '0.5rem' }}>Hamur Seç:</label>
              <select
                value={dough}
                onChange={(e) => setDough(e.target.value)}
                style={{ textAlign: 'left', display: 'block', marginBottom: '0.5rem' }}
              >
                <option value="">Hamur Seç</option>
                <option value="ince">İnce</option>
                <option value="kalın">Kalın</option>
              </select>
              
            </div>
          </div>

          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <h4 style={{ margin: 0 }}>Ek Malzemeler</h4>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              alignItems: 'center',
            }}>
              {Object.keys(toppings).map((topping) => (
                <CustomCheckbox
                  key={topping}
                  label={topping}
                  checked={toppings[topping]}
                  onChange={() => handleCheckboxChange(topping)}
                />
              ))}
            </div>
          </div>

        
          <div style={{ marginTop: '1rem', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Sipariş Notu:</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: '1rem',
          }}>
            <button
              type="button"
              style={{ ...buttonStyle, margin: 0 }}
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <span style={{
              margin: '0 1rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}>{quantity}</span>
            <button
              type="button"
              style={{ ...buttonStyle, margin: 0 }}
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div class="order-summary">
          <div class="order-details">
           <div class="order-item">
            <span class="label">Seçimler</span>
         <span class="value">25.00₺</span>
        </div>
        <div class="order-item">
         <span class="label">Toplam</span>
        <span class="value">110.50₺</span>
       </div>
       </div>
</div>
          <button type="submit" style={buttonStyle}>Sipariş Ver</button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;