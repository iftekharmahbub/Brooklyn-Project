import React from 'react'

const Button = ({children , className}) => {
  return (
    <a
      href="#"
      className={`font-semibold text-base leading-[150%]
       text-white bg-primary-500 inline-block px-6 py-3 outline-1 outline-primary-500 rounded-md ${className} hover:bg-white hover:text-primary-500 transition-colors duration-300`
      }
    >
      
      {children}
    </a>
  );
};

export default Button

