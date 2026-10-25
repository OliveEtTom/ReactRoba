import { useState } from "react"
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import ShoppingList from './components/ShoppingList/ShoppingList'
import QuestionForm from './components/QuestionForm/QuestionForm'
import Footer from './components/Footer/Footer'
import Categories from "./components/Categories/Categories"
const App = () => {
  const [cart, updateCart] = useState(0)

  return (
    <div>
      <Banner>
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Categories />
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App