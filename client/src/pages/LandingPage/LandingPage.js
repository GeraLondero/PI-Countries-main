import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
//import mapaMundo from '../../images/mapaMundo.jpg'; 

function LandingPage() {
  return (
    <div>
      <h1 className={styles.h1}> come on don't stop now</h1>
      <Link to="/home">
            <button>
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