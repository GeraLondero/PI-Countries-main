import styles from './CardCountries.module.css';
import Countrie from '../countrie/countrie.js'; 
import { Link } from 'react-router-dom';



export default function Card(props) {
  const { name, image, continents, id, population } = props;

  return (
    <div className={styles.card} key={id}> 
      <div>
        <div className={styles.cardImage}>
        <Link to={`/${id}`}>
          <img src={image} width="200" height="200" alt={name} />
          </Link>
        </div>

        <div className={styles.cardInfo}>
          <h1 >{name}</h1>
          <h3>{continents}</h3>
          <h5>N° Población: {population.toLocaleString()}</h5>
        </div>
      </div>

      <div >
        <div className={styles.btnConteiner}>
          <Link to={`/${id}`}>
            {/* <button >More info</button>  */}
          </Link>
        </div>
      </div>
    </div>
  );
}


/* function CardCountries({allCountries}) {
  const countriList = allCountries
  return (
    <div className={styles.list}>     
        {countriList?.map((count) =>(
         <Countrie count ={count}/>
        ))}
    </div>
  );
}

export default CardCountries; */