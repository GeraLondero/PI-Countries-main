import axios from "axios"; 
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
    } from './actions.type.js'; 

    export function getCountries(){
        return async function(dispatch){
            try {
                var json = await axios.get("/countries");
            return dispatch({
                type: GET_COUNTRIES,
                payload: json.data
                
            })
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    export function getCountriesName(name){
        return async function(dispatch){
            
                var json = await axios.get(`/countries?name=${name}`);
            console.log(json)
            return dispatch({
                type: GET_COUNTRIES_NAME,
                payload: json.data
                
            })
            
            
        }
    }

    export function getDetail(id){
        return async function(dispatch){
            var json = await axios.get(`/countries/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
                
            })
        }
    }

    export function reset(){  
    
        return{
            type: RESET,
            
        }
    
    }

    export function filterPorContinents(payload) {
        return {
            type: FILTER_POR_CONTINENTS,
            payload
        }
    }

    export function orderCountries(id){
        return{
            type: ORDER_COUNTRIES,
            payload: id,
        }
    
    }

    export function ordenPorPopulation(payload){

        return {
            type: ORDER_POR_POPULATION,
            payload
          };
    }

    export function filterPorActivity(payload){
        return{
        type: FILTER_POR_ACTIVITY,
        payload
        }
    }

    export function getActivityCreate(){
        return async function (dispatch) {
            try {
              const response = await axios.get(`/activities`);
              const activities = response.data;
        
              dispatch({ type: GET_ACTIVITY_CREATED, payload: activities });
            } catch (error) {
              console.log(error);
             
            }
          };
    }

    export function postActivity(payload){
        return async function (dispatch) {
            const apiData = await axios.post(`/activities`, payload)
            
            dispatch({type: POST_ACTIVITY, payload: apiData})
        }
    }


