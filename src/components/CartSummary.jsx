import React from 'react'
import CartItem from './CartItem'

export default function CartSummary(props) {
  const { carts, decQuantity, addToCart } = props
  const itemPrice = carts.reduce((acc, cur) => {
    return acc += (cur.price * cur.quantity)
  }, 0)
  const tax = itemPrice * 0.7

  return (
    <div className='min-w-1/3 bg-[#7886C7] p-2'>
      <h2 className='text-2xl rounded py-2 text-slate-600'>Card Items :</h2>
      {carts.length === 0 && <p>Empty Cart</p>}
      <div className='flex flex-col gap-2'>
        {carts.map(el => (
          <CartItem key={el.id} item={el} decQuantity={decQuantity} addToCart={addToCart} />
        ))}
      </div>

      {carts.length > 0 && (
        <>
          <div className="divider">total</div>

          <div className='flex justify-between'>
            <p className='font-bold'>Item Price</p>
            <p>${itemPrice.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>Tax</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>Shipping</p>
            <p>$0.00</p>
          </div>
          <div className='flex justify-between text-2xl'>
            <p>Total</p>
            <p>${(itemPrice + tax).toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  )
}
