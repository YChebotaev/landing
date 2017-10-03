import React from 'react';
import Button from './Button';

export const Submit = ({ children }) => {
  const style = {};
  return (
    <Button type="submit" value="Send" style={style}>{children}</Button>
  );
};

export const Form = ((props) => {
  return (
    <form {...props} />
  );
});

export const FormControl = ({ name, input = 'input', textarea = false, type="text", label = '', rows=1, defaultValue }) => {
  const style = {
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  };
  const labelStyle = {
    display: 'block'
  };
  const inputStyle = {
    border: '1px solid #dfdfdf',
    borderRadius: '3px',
    fontSize: '1rem',
    padding: '0.4rem',
    width: '100%',
    boxSizing: 'border-box'
  };
  return (
    <div style={style}>
      <label htmlFor={name} style={labelStyle}>{label}</label>
      {
        textarea ?
          <textarea id={name} name="name" rows={rows} style={inputStyle} /> :
          <input id={name} type={type} name={name} defaultValue={defaultValue} style={inputStyle} />
      }
    </div>
  );
};

export default Form;
