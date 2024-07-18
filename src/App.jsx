import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { User } from './components/User'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
function App() {

  return (
    <>
    <div>
      <Counter/>
      <User/>
    </div>
    </>
  )
}

export default App
