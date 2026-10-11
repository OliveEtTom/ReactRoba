import { plantList } from "../../data/PlantList"
import styles from './ShoppingList.module.css'
import PlantItem from "../PlantItem/PlantItem"
import CareScale from "../CareScale/CareScale"

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
                        <CareScale careType="water" scaleValue={plant.water}></CareScale>
                        <CareScale careType="light" scaleValue={plant.light}></CareScale>
                        {plant.isSpecialOffer && <div className={styles.lmjsales}>Soldes</div>}
                    </li>
                ))}
            </ul>


            <ul className={styles.lmjplantlist}>
                {plantList.map((plant) => (
                    <PlantItem name={plant.name} cover={plant.cover} water={plant.water} light={plant.light}></PlantItem>
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