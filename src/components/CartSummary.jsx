import React from 'react'
import CartItem from './CartItem'

export default function CartSummary(props) {
  const {carts} = props
  return (
    <div className='min-w-1/3 h-full bg-[#7886C7]'>
      <h2>Card Items :</h2>
      <CartItem />
    </div>
  )
}
