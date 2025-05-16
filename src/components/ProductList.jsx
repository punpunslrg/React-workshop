import {useState} from 'react'
import ProductCard from './ProductCard'

export default function ProductList(props) {
  const {products, addToCart} = props
  console.log(products[0])

  return (
    <div className='min-w-2/3 bg-[#A9B5DF]'>
      <h2 className='text-2xl rounded py-2 text-slate-600'>ProductList</h2>
      <div className='flex flex-wrap gap-3'>
        {products.map( el => (
          <ProductCard key={el.id} productItem={el} addToCart={addToCart} />
        ))}
      </div>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </div>
  )
}
