import React from 'react';

function Input({ name, type, placeholder }) {
  return (
    <div className="textfield">
      <input
        id={name}
        className="textfield_input"
        autoComplete="false"
        required
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
