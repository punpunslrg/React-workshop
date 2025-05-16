import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'

function App() {
  const [carts, setCarts] = useState([])

  return (
    <div className='h-screen flex flex-col'>
      <Header itemCount={carts.length}/>
      <div className='flex flex-1 w-full'>
        <ProductList />
        <CartSummary />
      </div>
    </div>
  )
}

export default App
