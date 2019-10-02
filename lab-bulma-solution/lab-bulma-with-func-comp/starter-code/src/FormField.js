import React from 'react';

const FormField = ({ label, type, placeholder }) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input className="input" type={type} placeholder={placeholder}/>
    </div>
  </div>
);

export default FormField;