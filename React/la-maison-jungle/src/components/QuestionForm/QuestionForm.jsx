import { useState } from 'react'

const checkValue = (value) => {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

    return (
        <div>
            <textarea
                value={inputValue}
                onChange
                ={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm