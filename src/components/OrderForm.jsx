import React, { useState } from 'react';
import axios from 'axios';
import CustomCheckbox from './CustomCheckbox'; 

function OrderForm({ goToPage, setOrderData }) {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState({
    "Pepperoni": false,
    "Sucuk": false,
    "Mantar": false,
    "TavukIzgara": false,
    "Misir": false,
    "KanadaJambonu": false,
    "Jalepeno": false,
    "Domates": false,
    "Ananas": false,
    "Biber": false,
    "Sarimsak": false,
    "Kabak": false,
    "Sosis": false
  });
  const [notes, setNotes] = useState('');

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
      name,
      size,
      toppings: selectedToppings,
      notes,
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>İsim:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pizza Boyutu:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)} required>
          <option value="">Seçin</option>
          <option value="küçük">Küçük</option>
          <option value="orta">Orta</option>
          <option value="büyük">Büyük</option>
        </select>
      </div>
      <div>
        <label>Malzemeler:</label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          alignItems: 'center',
        }}>
          <CustomCheckbox
            label="Pepperoni"
            checked={toppings.Pepperoni}
            onChange={() => handleCheckboxChange('Pepperoni')}
          />
          <CustomCheckbox
            label="Sucuk"
            checked={toppings.Sucuk}
            onChange={() => handleCheckboxChange('Sucuk')}
          />
          <CustomCheckbox
            label="Mantar"
            checked={toppings.Mantar}
            onChange={() => handleCheckboxChange('Mantar')}
          />
          <CustomCheckbox
            label="Sarımsak"
            checked={toppings.Sarimsak}
            onChange={() => handleCheckboxChange('Sarimsak')}
          />
          <CustomCheckbox
            label="Tavuk Izgara"
            checked={toppings.TavukIzgara}
            onChange={() => handleCheckboxChange('TavukIzgara')}
          />
          <CustomCheckbox
            label="Mısır"
            checked={toppings.Misir}
            onChange={() => handleCheckboxChange('Misir')}
          />
          <CustomCheckbox
            label="Ananas"
            checked={toppings.Ananas}
            onChange={() => handleCheckboxChange('Ananas')}
          />
          <CustomCheckbox
            label="Kanada Jambonu"
            checked={toppings.KanadaJambonu}
            onChange={() => handleCheckboxChange('KanadaJambonu')}
          />
          <CustomCheckbox
            label="Domates"
            checked={toppings.Domates}
            onChange={() => handleCheckboxChange('Domates')}
          />
          <CustomCheckbox
            label="Biber"
            checked={toppings.Biber}
            onChange={() => handleCheckboxChange('Biber')}
          />
          <CustomCheckbox
            label="Kabak"
            checked={toppings.Kabak}
            onChange={() => handleCheckboxChange('Kabak')}
          />
          <CustomCheckbox
            label="Soğan"
            checked={toppings.Sogan}
            onChange={() => handleCheckboxChange('Sogan')}
          />
          <CustomCheckbox
            label="Sosis"
            checked={toppings.Sosis}
            onChange={() => handleCheckboxChange('Sosis')}
          />
        </div>
      </div>
      <div>
        <label>Özel Notlar:</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <button type="submit">Sipariş Ver</button>
    </form>
  );
}

export default OrderForm;