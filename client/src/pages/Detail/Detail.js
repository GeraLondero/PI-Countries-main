import styles from './Detail.module.css';
import { Link } from 'react-router-dom';
import {useEffect} from 'react'; 
import { getDetail } from '../../actions/actions';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.detailId);
  
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>  
      
      
     <h1 className={styles.pais}>{details.name}</h1>
     
     <h2 className={styles.capital}>- Capital: {details.capital}</h2>
     <h2 className={styles.continente}>- Continente: {details.continents}</h2>
     <h2 className={styles.poblacion}>- Poblacion: {details.population}</h2>
     <h2 className={styles.subregion}>- Subregion: {details.subregion}</h2>
     <h2 className={styles.area}>- Area: {details.area}</h2>
     <div >
        <h2 className={styles.tituloActividades}><i>Actividades:</i></h2>
        {details.activities?.length > 0 ? (
          details.activities.map(act => (
            <div key={act.id}>
              <h3 className={styles.actividad}> {act.names}</h3>
              <p>
              {act.temporada && act.temporada.length > 0 ? (
                <span className={styles.temporada}>- Temporada: {act.temporada.map(temporada => temporada).join(", ")}</span>
              ) : (
                
                <span className={styles.temporada}>No hay información disponible sobre la temporada</span>
              )}
               
                <span className={styles.duracion}>- Duracion: {act.duration} hs</span>
                <span className={styles.dificultad}>- Dificultad: {act.difficulty}</span>
              </p>
            </div>
          ))
        ) : (
          <h3 className={styles.temporada}>¡Este país no tiene actividades!</h3>
        )}
      </div>
    
     <img src={details.flags} width="550" height="250" className={styles.img}/>
     <Link to="/home" >
            <button className={styles.volver}>
             Volver
            </button>
      </Link>
  
      
    </div>
  );
}

export default Detail;