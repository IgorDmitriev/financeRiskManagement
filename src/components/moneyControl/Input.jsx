import React from 'react';
import './Input.css';

const Input = ({ name, value, onChange }) => (
  <div className={ `Input ${name}`}>
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
