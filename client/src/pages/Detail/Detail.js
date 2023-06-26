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
      <h1 className={styles.h1}> Detalle de cada pais</h1>
      
      <Link to="/home">
            <button>
             Volver
            </button>
      </Link>
     <h1 className={styles.h1}>Pais: {details.name}</h1>
     <h2 className={styles.h1}>Capital: {details.capital}</h2>
     <h2 className={styles.h1}>Continente: {details.continent}</h2>
     <h2 className={styles.h1}>Poblacion: {details.population}</h2>
     <h2 className={styles.h1}>Subregion: {details.subregion}</h2>
     <h2 className={styles.h1}>Area: {details.area}</h2>
     <img src={details.flags} width="550" height="250" />
     
  
      
    </div>
  );
}

export default Detail;