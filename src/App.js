import React, { Component } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'

class App extends Component {
  render () {
    return <Toolbar theme="dark"/>
  }
}

function Toolbar (props) {
  return (
    <div>
      <ThemedButton theme={props.theme}/>
    </div>
  )
}

class ThemedButton extends Component {
  render () {
    return <Button>{this.props.theme}</Button>
  }
}

export default App
