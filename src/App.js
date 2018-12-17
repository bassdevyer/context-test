import React, { Component, createContext } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'

const ThemeContext = createContext('light')

class App extends Component {
  render () {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar/>
      </ThemeContext.Provider>
    )
  }
}

function Toolbar (props) {
  return (
    <div>
      <ThemedButton/>
    </div>
  )
}

class ThemedButton extends Component {
  // Assign a contextType to read the current theme context.
  static contextType = ThemeContext

  render () {
    return <Button>{this.context}</Button>
  }
}

export default App
