import {
    GET_COUNTRIES, 
    GET_COUNTRIES_NAME, 
    GET_DETAIL, 
    RESET,
    FILTER_POR_CONTINENTS,
    ORDER_COUNTRIES,
    ORDER_POR_POPULATION,
    FILTER_POR_ACTIVITY,
    GET_ACTIVITY_CREATED,
    POST_ACTIVITY,
    } from '../actions/actions.type.js'; 


const initialState = {
    countries: [],
    copyCountries: [],
    detailId: [],
    
}


function rootReducer (state= initialState, action){
     switch (action.type) {

        case GET_COUNTRIES:
            return{ 
                ...state,
                countries: action.payload,
                copyCountries: action.payload
            }

        case GET_COUNTRIES_NAME:
            return{ 
                ...state,
                countries: action.payload,
            }

        case GET_DETAIL:
            return{
                ...state,
                detailId: action.payload,
            }
            case RESET:
                return {
                 ...state,
                 countries: [...state.countries],
                }

            case FILTER_POR_CONTINENTS:
                const continents = state.copyCountries;
            const filteredContinents = action.payload === "All" ? continents :
            continents.filter(c => c.continents === action.payload)
            return{
                ...state,
                countries: filteredContinents,
            }

            case ORDER_COUNTRIES:
                const orderCopy = [...state.copyCountries]; 
          console.log("payload", action.payload); 
          const order = orderCopy.sort((a,b) => {
            if (a.id > b.id) {
              return "Ascendente" === action.payload ? 1 : -1; 
            }
            if (a.id < b.id) {
              return "Descendente" === action.payload ? 1 : -1; 
            }
            return 0; 
          }); 
          return {
            ...state,
            countries: order, 

          }
        case ORDER_POR_POPULATION:
            let populationOrden = [];
          let populationOrden2 = [];

          if (action.payload === "asc") {
            populationOrden = state.copyCountries.slice().sort((a, b) => b.population - a.population);
            populationOrden2 = state.countries.slice().sort((a,b)=> b.population - a.population);
            return{
              ...state,
              copyCountries: populationOrden,
              countries: populationOrden2
            }
          } 
          if (action.payload === "desc") {
            populationOrden = state.copyCountries.slice().sort((a, b) => a.population - b.population);
            populationOrden2 = state.countries.slice().sort((a, b) => a.population - b.population);
            return{
              ...state,
              copyCountries: populationOrden,
              countries: populationOrden2
            }
          } else {
            populationOrden = state.copyCountries;
          }
          return {
            ...state,
            countries: populationOrden,
          };

        case FILTER_POR_ACTIVITY:
          const { payload } = action;
              
                const filteredActivities = state.copyCountries.map((act) => {

                  const temporada = act.activities.map((el) => ({ seasons: el.season }));

                  return {
                    id: act.id,
                    name: act.name,
                    flags: act.flags,
                    continents: act.continents,
                    capital: act.capital,
                    population: act.population,
                    activities: temporada,
                  };
                });
              
                let turisActivities = [];
                if (payload === 'All') {
                  turisActivities = filteredActivities.filter((el) => el.activities.length > 0);
                } else {
                  turisActivities = filteredActivities.filter((el) =>
                    el.activities.some((s) => s.seasons && s.seasons.includes(payload))
                  );
                }
                return {
                  ...state,
                  countries: turisActivities,
                }; 
          case GET_ACTIVITY_CREATED: 
          return {
            ...state,
            activities: action.payload

        }      
        case GET_ACTIVITY_CREATED:
            return {
                ...state,
                activities: action.payload

            }      
        
        
        case POST_ACTIVITY:
            return {
                ...state,
                controllActivities: action.payload
            } 
                      
     
        default:
           return state; 
     }
}

export default rootReducer; 