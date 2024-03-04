import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const items = useSelector((state) => state);
    console.log(items);
  return (
    <div className='bg-gray-200 text-slate-800 font-bold py-5 rounded-lg shadow-md'>
        <h1 className='p-4'>Total Items: 5</h1>
        <h2>Price: 2000/- Only</h2>
    </div>
  )
}

export default Cart