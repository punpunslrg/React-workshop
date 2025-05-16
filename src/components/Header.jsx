import React from 'react'
import CartCount from './CartCount'

export default function Header(props) {
  const {itemCount} = props
  return (
    <div className='flex justify-between items-center h-15 bg-[#FFF2F2]'>
      <div>
        Logo, Brand
      </div>
      <CartCount itemCount={itemCount} />
    </div>
  )
}
