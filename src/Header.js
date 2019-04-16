import React from 'react'
import windowSize from 'react-window-size'
import Container from './Container'
import Button from './Button'
import Link from './Link'

const Avatar = () => {
  const style = {
    width: 180,
    height: 180,
    backgroundImage: 'url("/assets/my-picture.jpg")',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '100%',
    margin: 'auto'
  }
  return (
    <div style={style}>
      <video src='/assets/my-video.mp4' width='180' autoPlay loop muted />
    </div>
  )
}

export default windowSize(({ windowWidth: width, windowHeight: height }) => {
  const style = {
    width,
    height,
    display: 'flex',
    flexFlow: 'column nowrap',
    backgroundImage: 'url("/assets/head-background.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const headerStyle = {
    margin: 'auto',
    color: '#ffffff',
    marginTop: '1rem',
    marginBottom: '1rem'
  }
  const contactsStyle = {
    margin: 'auto',
    color: '#ffffff',
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 1.5
  }
  const buttonStyle = {
    margin: '1rem 1rem 0.5rem'
  }
  const buttonCaptionStyle = {
    color: '#ffffff',
    fontStyle: 'italic',
    fontSize: '0.9rem'
  }
  return (
    <div style={style}>
      <Container>
        <Avatar />
        <h1 style={headerStyle}>Чеботаев Юра</h1>
        <p style={contactsStyle}>
          Telegram:{' '}
          <Link notBounce href='https://t.me/ychebotaev'>
            +79120345101
          </Link>
          <br />
          Email:{' '}
          <Link notBounce href='mailto:+79120345101@ya.ru'>
            +79120345101@ya.ru
          </Link>
        </p>
        <Button
          notBounce
          href='https://yadi.sk/d/5Lyw24_H3NTy6s'
          style={buttonStyle}
        >
          Веб-разработка
        </Button>
        <div style={buttonCaptionStyle}>Скачать презентацию .pptx</div>
      </Container>
    </div>
  )
})
