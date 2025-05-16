import {useState} from 'react'
import ProductCard from './ProductCard'

export default function ProductList(props) {
  const {products} = props

  return (
    <div className='min-w-2/3 bg-[#A9B5DF]'>
      <h2>ProductList</h2>
      <ProductCard />
    </div>
  )
}
