import React from 'react'

export default function CartItem() {
  return (
    <div className='flex justify-between'>
      <p>Shoes</p>
      <div className='flex gap-1.5'>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'>+</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'>-</p>
      </div>
      <p>1 * $1000</p>
    </div>
  )
}
