import { useState } from 'react'

import './App.css'
import Counter from './components/Counter'

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = (e) => {
    console.log("toggle theme called");

    setTheme(e.target.value);
    console.log(theme);
  }

  return (
    <div className={"App " + theme}>
      <h1>My App</h1>

      <Counter></Counter>

      <select onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}

export default App
