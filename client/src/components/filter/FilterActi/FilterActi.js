import React, {useState} from "react";
import styles from './FilterActi.module.css'; 
import { useSelector, useDispatch} from "react-redux";
import { filterPorActivity } from "../../../actions/actions";

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

        <option value="All">All Activity</option>
        <option value="Summer">Summer</option>
        <option value="Spring">Spring</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
      </select>

    </div>
)
}

export default FilterActi; 