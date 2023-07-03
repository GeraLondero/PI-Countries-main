import styles from './About.module.css';
import { Link } from 'react-router-dom';
import mundo from '../../images/mundo.jpg'; 

function About() {
  return (
    <div>
      <h1 className={styles.h1}>Bienvenidos a la Api de Countries!!</h1>
      <img  src={mundo} alt="mundo" className= {styles.mundo}/>
          <h3 className={styles.h1}>En esta Api podrás realizar un recorrido por todos los países, acceder a sus caracteristicas, sus ubicaciones, como tambien ver las posibles actividades turísticas con las que cuentan y así decidir tu proximo destino de viaje.</h3>
      <Link to="/home">
            <button className={styles.volver}>
             Volver
            </button>
      </Link>
    </div>
  );
}

export default About;