import { plantList } from "../../data/PlantList"
import "./Categories.module.css"
const Categories = () => {

    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )

    return (
        <div>
            <h2>Catégories</h2>
            <select>
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            </select>
            <span>&nbsp;</span>
            <button>Chercher</button>
        </div>
    )
}

export default Categories