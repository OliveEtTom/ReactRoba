import styles from './PlantItem.module.css'

const handleClick = ({ name }) => {
    console.log('✨ Ceci est un clic ✨' + name)
}

const handleClickEvent = (e) => {
    console.log('✨ Ceci est mon event :', e)
}


const PlantItem = ({ name, cover, water, light }) => {
    const range = [1, 2, 3]

    return (
        //<li className={styles.plantitem} onClick={() => handleClick({ name })}>
        <li className={styles.plantitem} onClick={(e) => handleClickEvent({ e })}>
            <span><img src={cover} width="64" height="64" /></span>
            <span>{name}</span>
            {range.map((rangeElem) =>
                water >= rangeElem ? (
                    <span key="{rangeElem.toString()}">💧</span>
                ) : null
            )}
            {range.map((rangeElem) =>
                light >= rangeElem ? (
                    <span key="{rangeElem.toString()}">☀️</span>
                ) : null
            )}
        </li>
    )
}

export default PlantItem