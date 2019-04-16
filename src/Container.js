import React from 'react'

export default ({ children, ...props }) => {
  const style = {
    margin: 'auto',
    maxWidth: 960,
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'center'
  }
  return (
    <div {...props} style={Object.assign({}, style, props.style)}>
      {children}
    </div>
  )
}
