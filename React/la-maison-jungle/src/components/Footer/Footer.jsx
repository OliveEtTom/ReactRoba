import { useState } from 'react'
import styles from './Footer.module.css'

const checkValue = (value) => {
    if (!value.includes('@')) {
        alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }
}

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <footer className={styles.lmjfooter}>
            <div className={styles.lmjfooterelem}>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className={styles.lmjfooterelem}>Laissez-nous votre mail :</div>
            <textarea className={styles.lmjfooterarea}
                value={inputValue}
                onChange
                ={(e) => setInputValue(e.target.value)}
                onBlur={(e) => checkValue(inputValue)}
            />
        </footer>
    )
}

export default Footer