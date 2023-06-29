import React from "react";
import styles from './Nabvar.module.css';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';



function Nabvar({handleChange,handleSubmit}) {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div >
      <Link to= "/home"></Link>
      <Link to= "/about" className={styles.soyAbout}> Soy About</Link>
       <Link to= "/form" className={styles.Actividades}> Actividades</Link>
      <br/>
      <br/>
      
      <form className={styles.busqueda} onChange={handleChange}> 
      </form>
      </div>
    </div>
  );
}

export default Nabvar;