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
    let idx = carts.findIndex(el => el.id === id)
    let newItem 

    if(idx === -1) {
      newItem = { id: id, title: title, price: price, quantity: 1 }
      setCarts([...carts, newItem])
    } else {
      const clonedCart = [...carts]
      clonedCart[idx].quantity += 1
      setCarts(clonedCart)
    }
  }

  const decQuantity = (id) => {
    let idx = carts.findIndex(el => el.id === id)
    const clonedCart = [...carts]
    if(clonedCart[idx].quantity > 1) {
      clonedCart[idx].quantity -= 1
    } else {
      clonedCart.splice(idx, 1)
    }
    setCarts(clonedCart)
  }

  // const incQuantity = (id) => {
  //   let idx = carts.findIndex(el => el.id === id)
  //   const clonedCart = [...carts]
  //   clonedCart[idx].quantity += 1
  //   setCarts(clonedCart)
  // }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header itemCount={carts.length}/>
      <div className='flex flex-1'>
        <ProductList products={products} addToCart={addToCart} />
        <CartSummary carts={carts} decQuantity={decQuantity} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default App
