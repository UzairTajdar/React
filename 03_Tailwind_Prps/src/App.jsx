import { useState } from 'react'
import Card from './components/01_card'
import './App.css'

function App() {
  let user = {
    name: 'Uzair Tajdar',
    age: 20,
    address: 'Lahore'
  }
  let MyArr = [1,2,3,4,5]
  return (
    <>
    <h1 className='bg-green-600 p-4 rounded-xl text-black mb-4'>Uzair Tajdar</h1>
    <Card name="Faizania" btnTxt ="Explore ME"/>

    </>
  )
}

export default App
