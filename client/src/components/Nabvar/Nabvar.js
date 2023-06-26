import React from "react";
import styles from './Nabvar.module.css';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { reset } from "../../actions/actions";


function Nabvar({handleChange,handleSubmit}) {
  const dispatch = useDispatch();
  return (
    <div>
      
      <Link to= "/about" className={styles.about}> Soy About</Link>
      <Link to= "/home" className={styles.home}> Home</Link>
      <Link to= "/form" className={styles.favorites}> Actividades</Link>
      
      <form className={styles.busqueda} onChange={handleChange}>
        <button  onClick={()=> dispatch(reset())}>Reset</button> 
      </form>
      
    </div>
  );
}

export default Nabvar;