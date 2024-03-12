import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({
    type="button", 
    color="black", 
    onclick= () => {},
    children="...",
    href="#"
}) => {
  return (
    <Link
        to={href}
        type={type}
        onClick={onclick}
        className={`text-white font-semibold p-1 rounded-md bg-${color}-500 hover:bg-${color}-700`} 
        >
        {children}
    </Link>
  )
}

export default Button;