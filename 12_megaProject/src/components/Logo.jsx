import React from 'react'
import logo from '../images/logo.jpg'; // with import

function Logo({width = '100px'}) {
  // const logo = require('../images/logo.jpg'); // with require

  return (
    <div>
      <img className={`width:${width} w-14 rounded-xl` } src={logo} alt="Logo" />
      {/* <img src={logo} /> */}
      </div>
  )
}

export default Logo