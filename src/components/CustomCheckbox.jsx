import React from 'react';

function CustomCheckbox({ label, checked, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ marginRight: '8px' }} 
      />
      <label>{label}</label>
    </div>
  );
}

export default CustomCheckbox;