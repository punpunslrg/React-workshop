import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  // cart = {id, price, title, quantity}

  const fetchProducts = async () => {
    const data = await (await fetch('http://localhost:8000/products')).json()
    setProducts(data)
  }

  useEffect( ()=>{
    fetchProducts()
  },[])

  const addToCart = (id, title, price) => {
    let newItem = { id: id, title: title, price: price, quantity: 1 }
    setCarts([...carts, newItem])
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header itemCount={carts.length}/>
      <div className='flex flex-1'>
        <ProductList products={products} addToCart={addToCart} />
        <CartSummary carts={carts} />
      </div>
    </div>
  )
}

export default App
