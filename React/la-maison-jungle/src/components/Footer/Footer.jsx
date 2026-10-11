import { useState } from 'react'
import './Footer.module.css'

const checkValue = (value) => {
    if (!value.includes('@')) {
        alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }
}

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea
                value={inputValue}
                onChange
                ={(e) => setInputValue(e.target.value)}
                onBlur={(e) => checkValue(inputValue)}
            />
        </footer>
    )
}

export default Footer