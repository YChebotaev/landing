import React from 'react';
import Link from './Link';

export default ({ href, ...props }) => {
  const style = Object.assign({
    textDecoration: 'none',
    border: 'none',
    backgroundColor: 'rgb(7, 183, 223)',
    color: '#ffffff',
    borderRadius: '3px',
    padding: '0.5rem 1rem',
    fontSize: '1rem'
  }, props.style);
  return href ? <Link href={href} {...props} style={style} /> : <button {...props} style={style} />;
};
