import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
//import mapaMundo from '../../images/mapaMundo.jpg'; 

function LandingPage() {
  return (
    <div>
      <h1 className={styles.h1}> ¿Listo para una vuelta al mundo?</h1>
      <Link to="/home" >
            <button className={styles.ingresar}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
             Ingresar
            </button>
      </Link>
      
    </div>
  );
}

export default LandingPage;