//import styles from './SearchBar.module.css';
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getCountriesName } from '../../actions/actions';



export default function SearchBar({setCurrentPage}) {
    const [name, setName] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();
  
    const handleInputChange = (e) => {
      const { value } = e.target;
      setName(value);
      dispatch(getCountriesName(value));
      setCurrentPage(1)

    };
  
    const handleClick = () => {
      setIsSearchOpen(false);
      searchInputRef.current.focus();
    };
  
    const handleBlur = () => {
      if (name.trim() === "") {
        setIsSearchOpen(false);
      }
    };
  
  
    return (
      <div>
        <div /* className={`${styles.searchContainer} ${isSearchOpen ? styles.open : ''}`} */>
         
            <div /* className={styles.lupa} onClick={handleClick} */>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
            </div>
          
  
          <form action="search-bar">
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search..."
              value={name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              
              /* className={`${styles.search} ${isSearchOpen ? styles.searchOpen : ''}`} */
            />
            
          </form>
        </div>

      </div>
    );
  }