import styles from './Cart.module.css'
const Cart = () => {
    const monsteraPrice = 8
    const lierrePrice = 10
    const flowerPrice = 15

    return (
        <div className={styles.cart}>
            <p>Mon panier :</p>
            <p>- Monstera - {monsteraPrice}€</p>
            <p>- Lierre - {lierrePrice}€</p>
            <p>- Bouquet de fleurs - {flowerPrice}€</p>
            <p>- Total - {monsteraPrice + lierrePrice + flowerPrice}€</p>
        </div>
    )
}

export default Cart