import { useState } from "react"
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import ShoppingList from './components/ShoppingList/ShoppingList'
import QuestionForm from './components/QuestionForm/QuestionForm'
import Footer from './components/Footer/Footer'
import Categories from "./components/Categories/Categories"
import './App.css'
const App = () => {
  const [cart, updateCart] = useState(0)

  return (
    <div>
      <Banner />
      <div className="layout">
        <aside>
          <Cart cart={cart} updateCart={updateCart} />
        </aside>
        <main>
          <Categories />
          <ShoppingList cart={cart} updateCart={updateCart} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App