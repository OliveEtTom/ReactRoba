import { plantList } from "../../data/PlantList"
import styles from './ShoppingList.module.css'

const ShoppingList = () => {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className={styles.lmjplantlist}>
                {plantList.map((plant) => (
                    <li key={plant.id} className={styles.lmjplantitem}>
                        {plant.name}
                        {plant.isSpecialOffer && <div className={styles.lmjsales}>Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
    /*return (
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>
                    {plant.isBestSale && <span>🔥 </span>}
                    {plant.name}
                </li>
            ))}
        </ul>
    )*/

}

export default ShoppingList