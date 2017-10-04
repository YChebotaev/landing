import React from 'react';
import Container from './Container';
import Form, { FormControl, Submit } from './Form';

export default () => {
  const style = {
    backgroundColor: '#eaeaea',
    paddingTop: '3rem',
    paddingBottom: '3rem'
  };
  const formStyle = {
    margin: 'auto',
    textAlign: 'left',
    minWidth: 300
  };
  return (
    <div style={style}>
      <Container>
        <h2>Выйти на связь</h2>
        <Form style={formStyle} action="//formspree.io/+791203451@ya.ru" method="POST">
          <FormControl name="name" type="text" label="Как вас зовут?" />
          <FormControl name="phone" type="text" label="Контактный телефон" />
          <FormControl name="_replyto" type="email" label="Контактный емейл" />
          <FormControl textarea rows={4} name="message" label="Как я могу вам помочь?" />
          <Submit>Отправить</Submit>
        </Form>
      </Container>
    </div>
  );
};
