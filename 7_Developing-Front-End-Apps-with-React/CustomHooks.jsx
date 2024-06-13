import ReactDOM from 'react-dom'
import React, {useState} from 'react'

function ToggleButton() {
  const [isToggled, toggle] = UseToggle(false)
  return (
    <div>
      <h1>Toggle Button</h1>
      <button onClick={toggle}>{isToggled ? 'ON' : 'OFF'}</button>
    </div>
  )
}

function UseToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const toggle = () => {
    setValue(!value)
  }
  return [value, toggle]
}

function App() {
  return <ToggleButton />
}

ReactDOM.render(<App />, document.getElementById('root'))
