import React from 'react'
import { useState, useEffect } from 'react'

export default function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false)
  const {addToCart, productItem : {id, category, description, image, price, rating, title}} = props

  return (
    <div>
      <div className="card justify-start bg-base-100 w-80 h-120 shadow-sm rounded-3xl overflow-auto">
        <figure className={`mx-auto ${showDesc ? 'h-0' : 'h-50'}`}>
          <img className='h-full object-contain p-4'
            src={image}
            alt={title} />
        </figure>
        <div className="card-body bg-[#eee]">
          <h2 className={`card-title text-2xl ${showDesc ? '' : 'line-clamp-2'}`}>{title}</h2>
          <div><span className='font-bold'>category : </span>{category}</div>
          <p className={showDesc? '' : 'line-clamp-2'}>{description}</p>
          <div className='flex justify-between pb-2'>
            <p className='text-2xl'>${price}</p>
            <button className='btn h-[32px] rounded-2xl' 
              onClick={() => setShowDesc(prv=>!prv)}>more</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary rounded-2xl"
              onClick={()=>addToCart(id, title, price)}
            >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
