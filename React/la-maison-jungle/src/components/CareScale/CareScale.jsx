const handleClick = ({ careType, scaleValue }) => {
    const what = careType === 'light' ? "de lumière" : "d'arrosage"
    const howmuch = scaleValue === 1 ? "peu" : scaleValue === 2 ? "modérément" : "beaucoup"
    alert("Cette plante requiert " + howmuch + " " + what)
}

const CareScale = ({ scaleValue, careType }) => {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => handleClick({ careType, scaleValue })}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key="{rangeElem.toString()}" >{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale