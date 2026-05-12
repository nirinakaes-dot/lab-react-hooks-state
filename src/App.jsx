import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { sampleProducts } from './components/ProductList'
import './App.css'
import darkModeStyles from './styles/DarkMode.module.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(sampleProducts.map((product) => product.category))]

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  const handleToggleDarkMode = () => {
    setIsDarkMode((currentMode) => !currentMode)
  }

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product])
  }

  return (
    <div className={`${darkModeStyles.app} ${isDarkMode ? darkModeStyles.dark : darkModeStyles.light}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />

      <div className="filterRow">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'All' : category}
            </option>
          ))}
          <option value="NonExistent">NonExistent</option>
        </select>
      </div>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      <div className="cartSection">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  )
}

export default App
