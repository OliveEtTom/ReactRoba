import styles from './PlantItem.module.css'
const PlantItem = ({ name, water, light }) => {
    const range = [1, 2, 3]

    return (
        <div className={styles.plantitem}>
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
        </div>
    )
}

export default PlantItem