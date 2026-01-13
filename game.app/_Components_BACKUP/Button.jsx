import React from 'react'

const Button = ({title}) => {
  return (
<button className='cursor-pointer mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'>
  <span className='hover:text-white hover:font-bold hover:text-2xl
   transition-all duration-300 hover:rotate-180  ' >{title}</span>

</button>  
  )
}

export default Button