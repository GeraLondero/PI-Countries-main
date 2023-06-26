import styles from './Countrie.module.css'; 
import { Link } from 'react-router-dom';
function countrie({count}){
    const {name, continent, flags, id} = count
return(
    <div className={styles.div}>
        <Link to={`/${id}`}>
        <img src={flags} width="850" height="850" />
        <p>{name}</p>
        <p>{continent}</p>
        </Link>
    </div>
)
    
}

export default countrie; 