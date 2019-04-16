import React, { Component } from 'react'
import Header from './Header'
import GetInTouch from './GetInTouch'
import ContactsFooter from './ContactsFooter'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <GetInTouch />
        <ContactsFooter />
      </div>
    )
  }
}

export default App
