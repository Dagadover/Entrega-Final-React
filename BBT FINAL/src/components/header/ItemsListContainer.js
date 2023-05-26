import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/ps"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/xbox">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/nintendo">
                    {props.itemTres}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

