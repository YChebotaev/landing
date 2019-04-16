import React from 'react'
import Container from './Container'
import Link from './Link'

export default () => {
  const style = {
    marginTop: '3rem',
    marginBottom: '3rem'
  }
  const textStyle = {
    margin: 'auto',
    color: '#323232',
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 1.5
  }
  const copyrightStyle = {
    margin: 'auto',
    color: '#323232',
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.8rem',
    lineHeight: 1.5
  }
  return (
    <footer style={style}>
      <Container>
        <h2>Контактная информация</h2>
        <p style={textStyle}>
          Россия, Екатеринбург (+5 UTC)
          <br />
          Email:{' '}
          <Link notBounce href='mailto:+79120345101@ya.ru'>
            +79120345101@ya.ru
          </Link>
          <br />
          Skype:{' '}
          <Link notBounce href='skype:ychebotaev?call'>
            ychebotaev
          </Link>
          <br />
          Telegram:{' '}
          <Link
            notBounce
            href='https://t.me/ychebotaev'
            target='_blank'
            rel='noopener noreferrer'
          >
            +79120345101
          </Link>
        </p>
        <p style={copyrightStyle}>Copyright &copy; 2019</p>
      </Container>
    </footer>
  )
}
