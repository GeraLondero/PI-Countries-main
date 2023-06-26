import React, { useState } from "react";
import styles from './CantidadPobla.module.css'; 
import { ordenPorPopulation } from "../../../actions/actions";
import { useDispatch} from "react-redux";


function CantidadPobla({setCurrentPage}){

    const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  function handleSort(e) {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);
    dispatch(ordenPorPopulation(selectedSortOrder));
    setCurrentPage(1);
  }

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }


return(
    <div className={styles.orderName}>
        <select  value={sortOrder}
        onChange={handleSort}
        onClick={toggleExpand}>
        <option value="all">Ordenar por poblacion</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        </select>

    </div>
)
}

export default CantidadPobla; 