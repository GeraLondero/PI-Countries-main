import React, { useState }  from "react";
import styles from './FilterCont.module.css'; 
import { useSelector, useDispatch} from "react-redux";
import { filterPorContinents } from "../../../actions/actions";
import Countrie from "../../countrie/countrie";
import CardCountries from "../../CardCountries/CardCountries";

function FilterCont({setCurrentPage}){
  const dispatch = useDispatch();
  const [selectedContinent, setSelectedContinent] = useState('');

  function handleFilterContinents(e) {
    e.preventDefault()
    const continent = e.target.value;
    setCurrentPage(1);
    setSelectedContinent(continent);
    dispatch(filterPorContinents(continent));
  }

  

return(
    <div className={styles.orderName}>
       <select
        value={selectedContinent}
        onChange={handleFilterContinents}
      >
        <option value="All">Filtrar por Continente</option>
        <option value="North America">Norte America</option>
        <option value="South America">Sur America</option>
        <option value="Europe">Europa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
      </select>

    </div>
)
}

export default FilterCont; 