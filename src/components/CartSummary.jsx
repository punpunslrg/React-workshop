import React from 'react'
import CartItem from './CartItem'

export default function CartSummary(props) {
  const {carts} = props
  return (
    <div className='min-w-1/3 bg-[#7886C7]'>
      <h2 className='text-2xl rounded py-2 text-slate-600'>Card Items :</h2>
      <div className='flex flex-col gap-2'>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <pre>{JSON.stringify(carts,null,2)}</pre>
    </div>
  )
}
