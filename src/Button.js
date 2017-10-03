import React from 'react';

export default (props) => {
  const style = Object.assign({
    border: 'none',
    backgroundColor: 'rgb(7, 183, 223)',
    color: '#ffffff',
    borderRadius: '3px',
    padding: '0.5rem 1rem',
    fontSize: '1rem'
  }, props.style);
  return (
    <button {...props} style={style} />
  );
};
