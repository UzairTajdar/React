import React from 'react'

function Button({
      children,
      type = 'button',
      textColor = 'text-white',
      bgColor = 'bg-blue-500',
      className = '',
      ...props
}) {
  return (
    <button className={`rounded-lg py-2 px-4 ${type} ${bgColor} ${className} ${textColor} {...props}`}>
      {children}
    </button>
  )
}

export default Button