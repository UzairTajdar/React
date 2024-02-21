import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const increase = () => {
    // counter = counter + 1;
    // setCounter(counter)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    // console.log(counter)
  }
  const decrease = () => {
    if (counter >= 1) {
      counter = counter - 1;
      setCounter(counter)
    }
    //else{
    //   const span = document.createElement('span');
    //   span.innerHTML = "<br>Can't Go below 0";
    //   const main = document.getElementById('main');
    //   main.appendChild(span)
    // }
    // console.log(counter)
  }
  return (
    <div id = 'main'>
      <h1>Counter Function </h1>
      <h3>Counter {counter}</h3>
      <button
        onClick={increase}
      >Increase {counter}</button>
      <button
        onClick={decrease}
      >Decrease {counter}</button>
    </div>
  )
}

export default App
