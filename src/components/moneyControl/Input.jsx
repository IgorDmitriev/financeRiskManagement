import React from 'react';

const Input = ({ name, value, onChange }) => (
  <div className="Input">
    <label htmlFor={ name }>{ name }</label>
    <input
      id={ name }
      type="number"
      name={ name }
      value={ value }
      onChange={ onChange } />
  </div>
);

export default Input;
