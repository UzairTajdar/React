import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
    <h1>First Component</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, a.</p>
   </>
  )
}

const Second = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const username = 'Uzair Tajdar'
const reactElement = React.createElement(
  'a',
   { href: 'https://google.com', target: '_blank' },
    'Visit Google ',
    username
    )
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
