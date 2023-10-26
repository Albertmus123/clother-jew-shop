import React from 'react'
import {NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-end px-4 py-4'>
      <div className="flex space-x-4 ">     
         <NavLink to="/">Home</NavLink>
         <NavLink>Product</NavLink>
         <NavLink>Create Account</NavLink>
         <NavLink to="/cart-details">cart-details</NavLink>
      </div>
    </div>
  )
}
