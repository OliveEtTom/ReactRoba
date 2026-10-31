import { useState } from "react"
import { plantList } from "../../data/PlantList"
import PlantItem from "../PlantItem/PlantItem"
import styles from "./ShoppingList.module.css"

const ShoppingList = ({ cart, updateCart }) => {
    return (
        <div className={styles.lmjshoppinglist}>
            <ul className={styles.lmjplantlist}>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <span>&nbsp;</span>
                        <button className={styles.lmjplantlistbutton} onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList