import React from 'react'

export default function CartItem(props) {
  const {addToCart ,decQuantity ,item: {id, title, price, quantity}} = props

  return (
    <div className='flex justify-between'>
      <div className='w-[170px]'>{title.split(' ')[0] + title.split(' ')[1]}</div>
      <div className='flex gap-1.5'>
        <div className='btn btn-neutral size-6'
          onClick={()=>addToCart(id)}
        >+</div>
        <div className='btn btn-neutral size-6'
          onClick={()=>decQuantity(id)}
        >-</div>
      </div>
      <div className='w-[170px] text-right'>{quantity} * ${price}</div>
    </div>
  )
}
