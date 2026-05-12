import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in cart: {cartItems.length}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={`${item.id}-${item.name}`}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
