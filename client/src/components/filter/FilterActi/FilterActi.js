import React, {useState} from "react";
import styles from './FilterActi.module.css'; 
import { useSelector, useDispatch} from "react-redux";
import { filterPorActivity } from "../../../actions/actions.js";

function FilterActi({setCurrentPage}){
    const dispatch = useDispatch(); 
    const [selectSeason, setSelectSeason] = useState('');

  const handleChange = (e) => {
    const seasons = e.target.value;
    setCurrentPage(1);
    setSelectSeason(seasons);
    dispatch(filterPorActivity(seasons));
  };



return(
    <div className={styles.orderName}>
        <select value={selectSeason}
        onChange={handleChange}>

        <option value="All">Todas las Actividades</option>
        <option value="Summer">Verano</option>
        <option value="Spring">Primavera</option>
        <option value="Autumn">Otoño</option>
        <option value="Winter">Invierno</option>
      </select>

    </div>
)
}

export default FilterActi; 