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
        <li className={styles.plantitem} onClick={(e) => handleClickEvent({ e })}>
            <span className={styles.plantitemspan}><img className={styles.plantitemimage} src={cover} /></span>
            <h4 className={styles.plantitemspan}>{name}</h4>
            {range.map((rangeElem) =>
                water >= rangeElem ? (
                    <span className={styles.plantitemspan} key="{rangeElem.toString()}">💧</span>
                ) : null
            )}
            {range.map((rangeElem) =>
                light >= rangeElem ? (
                    <span className={styles.plantitemspan} key="{rangeElem.toString()}">☀️</span>
                ) : null
            )}
        </li>
    )
}

export default PlantItem