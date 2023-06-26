import React from "react";
import styles from './OrderAlfa.module.css'; 
import { useSelector, useDispatch} from "react-redux";
import { orderCountries } from "../../../actions/actions";

function OrderAlfa(){
    const dispatch = useDispatch(); 

    function handleClick(e){
        const { name, value} = e.target
        if (name === "order") {
         return dispatch(orderCountries(value))
        }
      }


return(
    <div className={styles.orderName}>
        <select className={styles.select} name="order" defaultValue={"DEFAULT"} onChange={handleClick}>
            <option value="DEFAULT" disabled>Ordena alfabeticamente</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>

    </div>
)
}

export default OrderAlfa; 