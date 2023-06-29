import styles from './Home.module.css';
import {useEffect, useState} from 'react'; 
import {useDispatch, useSelector} from 'react-redux'; 
import { getCountries, getCountriesName, getActivityCreate } from '../../actions/actions';
import CardCountries from '../../components/CardCountries/CardCountries.js'; 
import Nabvar from '../../components/Nabvar/Nabvar.js'; 
import OrderAlfa from '../../components/filter/OrderAlfa/OrderAlfa';
import FilterCont from '../../components/filter/FilterCont/FilterCont';
import FilterActi from '../../components/filter/FilterActi/FilterActi';
import CantidadPobla from '../../components/filter/CantidaPobla/CantidadPobla';
import Paginado from '../../components/Paginado/Paginado'; 
import SearchBar from '../../components/SearchBar/SearchBar';
import { reset } from "../../actions/actions";



export default function Home() {
 const dispatch = useDispatch();
 const allCountries = useSelector((state)=> state.countries);
 //const [searchString, setSearchString] = useState(""); 
 const [currentPage, setCurrentPage] = useState(1);
 const [countriePerPage] = useState(10); 
 const indexLastCountries = currentPage * countriePerPage;
 const indexFirstCountries = indexLastCountries - countriePerPage;
 const currentCountrie = allCountries.slice(indexFirstCountries, indexLastCountries);

 const paginado = (pageNumber) => {
  setCurrentPage(pageNumber);
};

 /* function handleChange(e){
  e.preventDefault()
  setSearchString(e.target.value);
 }

 function handleSubmit(e){
  e.preventDefault(); 
  dispatch(getCountriesName(searchString))
 }
 */

 useEffect(()=>{
  dispatch(getCountries())
  dispatch((getActivityCreate()))
},[dispatch])
  
  return (
    <div>
      <Nabvar /* handleChange={handleChange} handleSubmit={handleSubmit} */ />
      <Paginado 
          countryPerPage={countriePerPage}
          allCountries={allCountries.length}
          paginado={paginado}
          currentPage={currentPage}/>

      <h1 className={styles.titulo}>Home</h1>
      <div>
        <OrderAlfa setCurrentPage={setCurrentPage}/>
     </div>
     <br />
     <div>
      <FilterCont setCurrentPage={setCurrentPage}/> 
     </div>
     <br />
     <div>
      <FilterActi setCurrentPage={setCurrentPage} />
     </div>
     <br />
     <div>
      <CantidadPobla setCurrentPage={setCurrentPage}/>
     </div>

     <div>
        <SearchBar setCurrentPage={setCurrentPage} />
          </div>
     <div>
        <button className={styles.reset} onClick={()=> dispatch(reset())}>Reset</button>
     </div>
    
      {/* <CardCountries  allCountries = {allCountries}/>
      
 */}
 <br/>
      <div className={styles.cardContainer}>
          {
            currentCountrie?.map((el) => (
              <CardCountries
                key={el.id}
                id={el.id}
                name={el.name}
                continents={el.continents}
                population={el.population}
                subregion={el.subregion}
                image={el.flags}
                
              />
            ))
          }
        </div>
      
    </div>
  );
}