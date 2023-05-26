const AddCantCart = (props) => {
    return(
        <div className="addCantCart">
            <div>
                <button id="quitar">-</button>
                <span className="cantTxt"> {props.cant} unidades</span>
                <button id="aumentar">+</button>
            </div>
        </div>
    )   
}

export default AddCantCart; 