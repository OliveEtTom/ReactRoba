import { useState } from "react"
import styles from "./Cart.module.css"
const Cart = ({ cart, updateCart }) => {
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className={styles.cart}>
            <button
                className={styles.cart_button}
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button className={styles.cart_button} onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <div className={styles.cart}>
            <button
                className={styles.cart_button}
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart