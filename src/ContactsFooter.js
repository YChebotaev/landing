import React from 'react';
import Container from './Container';

export default () => {
  const style = {
    marginTop: '3rem',
    marginBottom: '3rem'
  };
  const textStyle = {
    margin: 'auto',
    color: '#323232',
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 1.5
  };
  const copyrightStyle = {
    margin: 'auto',
    color: '#323232',
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.8rem',
    lineHeight: 1.5
  };
  return (
    <footer style={style}>
      <Container>
        <h2>Контактная информация</h2>
        <p style={textStyle}>
          Россия, Екатеринбург (+5 UTC)
          <br />
          Email: +79120345101@ya.ru
          <br />
          Skype: bloxfox (always offline)
          <br />
          Telegram: +79120345101
        </p>
        <p style={copyrightStyle}>Copyright &copy; 2017</p>
      </Container>
    </footer>
  );
};
