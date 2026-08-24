import { useState } from 'react'
import data from '../data.json'
import ProductCard from './ProductCard.jsx'
import Cart from './Cart.jsx'
import Modal from './Modal.jsx'
import './app.css'

function App() {

  const [cart, setCart] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  function addToCart(product) {
    const ex = cart.find((item) => item.name === product.name);

    if(ex) {
      setCart(cart.map((item) => 
      item.name === product.name
      ? {...item, quantity: item.quantity + 1}
      : item
      ));
    }else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(name) {
    setCart(cart.filter((item) => item.name !== name))
  }

  function getQuantity(name) {
    const item = cart.find((i) => i.name === name)
    return item ? item.quantity : 0
  }

  function decrement(name) {
    const item = cart.find((i) => i.name === name)

    if (item.quantity === 1) {
      setCart(cart.filter((i) => i.name !== name))    // 减到 0 → 直接移除
    } else {
      setCart( cart.map( (i) =>
        i.name === name ? {...i, quantity: i.quantity-1} : i )
    )}
  }

  function confirmOrder() {
    setIsConfirmed(true)
  }

  function startNewOrder() {
    setCart([])           // 清空购物车
    setIsConfirmed(false) // 关闭弹窗
  }


  return (
    <>
      <main className="app">

        <div className='products-column'>
          <h1>Desserts</h1>

          <section className="product-list">
            {data.map((product) => {
              return <ProductCard key={product.name} quantity={getQuantity(product.name)} 
              product={product} onAdd={addToCart} onDecrement={decrement} />
            })}
          </section>
        </div>

        <Cart cart={cart} onRemove={removeFromCart} onConfirm={confirmOrder} />
      </main>
        
      {isConfirmed ? (
        <Modal cart={cart} onStartNewOrder={startNewOrder} />
      ) : <></>
      }
    </>
  )
}

export default App
