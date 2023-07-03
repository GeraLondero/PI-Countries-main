import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCountries, postActivity} from '../../actions/actions.js'; 
import { validation } from './validation.js'; 
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './styles/FormActivity.module.css';
import { Link } from 'react-router-dom';

export default function FormActivity() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries);

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        names: "",
        difficulty: "",
        duration: "",
        temporada: [],
        countries: [],
    })


    useEffect(()=> {
        dispatch(getCountries())
    }, [dispatch])


    function handleChange(e) {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        setErrors(validation({
          ...form,
          [e.target.name]: e.target.value,
        }));
      }


      function handleCheck(e) {
        const selectedSeason = e.target.value;
      
        if (selectedSeason === 'All') {
          if (e.target.checked) {
            setForm((prevForm) => ({
              ...prevForm,
              temporada: ['Summer', 'Autumn', 'Winter', 'Spring'],
            }));
          } else {
            setForm((prevForm) => ({
              ...prevForm,
              temporada: [],
            }));
          }
        } else {
          if (e.target.checked) {
            setForm((prevForm) => ({
              ...prevForm,
              temporada: [...prevForm.temporada, selectedSeason],
            }));
            setErrors((prevErrors) => {
              const updatedErrors = { ...prevErrors };
              delete updatedErrors.temporada;
              return updatedErrors;
            });
          } else {
            setForm((prevForm) => ({
              ...prevForm,
              temporada: prevForm.temporada.filter((temporada) => temporada !== selectedSeason),
            }));
            setErrors(validation({ ...form, temporada: form.temporada }));
          }
        }
      }
      
      

    function handleSelect(e){
        setForm({
            ...form,
            countries: [...form.countries, e.target.value]
        })
        setErrors(validation ({
            ...form, 
            [e.target.name]: e.target.value
        }))
    }

    function handleDelete(e){
        setForm({
            ...form,
            countries: form.countries.filter(coun => coun !== e)
        })
    }

    function handleSubmit(e) {
      e.preventDefault();
      const formErrors = validation(form);
      if (Object.keys(errors).length === 0 && Object.keys(formErrors).length === 0) {
        if (Object.values(form).every((value) => value !== "")) {
          swal({
            title: "¿Quieres crear la actividad? Este paso no se puede modificar...",
            text: "¡Éxito! Ya puedes disfrutar de tu actividad",
            icon: "Advertencia",
            buttons: ["Cancel", "Create"],
            dangerMode: true,
            className: 'custom-modal'
          }).then((createConfirmed) => {
            if (createConfirmed) {
              const formData = {
                ...form,
                temporada: form.temporada
              };
              dispatch(postActivity(formData));
              setForm({
                names: "",
                difficulty: "",
                duration: "",
                temporada: [],
                countries: []
              });
              navigate("/home");
    
              swal("¡Actividad creada!", "Ya puedes disfrutar de tu actividad", "éxito");
            } else {
              swal("Proceder a realizar los cambios");
            }
          });
        } else {
          swal("Por favor complete todos los campos requeridos.", "", "error");
        }
      } else {
        setErrors(formErrors);
        swal("Corrija los errores de validación.", "", "error");
      }
    }



    return (

        <div>
            <div className={styles.divform}>
            <h3 >Create tourist activity</h3>
            <form onSubmit={(e) => handleSubmit(e)} >
              
              <div >
                <div >
                    <label>Activity Name:</label>
                    <input 
                    placeholder="Name..."
                    type="text" 
                    value={form.names}
                    name="names"
                    onChange={handleChange}
                    />
                    {errors.names && (
                        <p>{errors.names}</p>
                    )}
                </div>
                  
                <div>
                    <label>Difficulty: </label>
                    <select 
                    type="number" 
                    value={form.difficulty}
                    name="difficulty"
                    onChange={handleChange} 
                    >
                        <option value="">Seleciona la dificultad</option>
                        <option value="1">Muy facil</option>
                        <option value="2">Facil</option>
                        <option value="3">Normal</option>
                        <option value="4">Dificil</option>
                        <option value="5">Extremo</option>
                    </select>
                    {errors.difficulty && (
                        <p>{errors.difficulty}</p>
                    )}
                </div>

                <div>
                    <label>Duration: </label>
                    <input 
                    placeholder="Duration..."
                    type="number" 
                    value={form.duration}
                    name="duration"
                    onChange={handleChange}
                    
                    />
                    {errors.duration && (
                    <p>{errors.duration}</p>
                    )}
                    <span>Hs</span>
                </div>

                <div>
                    <label>temporada:</label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="All"
                        value="All"
                        onChange={handleCheck}/>All
                    </label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="Summer"
                        value="Summer"
                        onChange={handleCheck}/>Summer
                    </label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="Autumn"
                        value="Autumn"
                        onChange={handleCheck}/>Autumn
                    </label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="Winter"
                        value="Winter"
                        onChange={handleCheck}/>Winter
                    </label>
                    <label>
                    <input 
                        type="checkbox" 
                        name="Spring"
                        value="Spring"
                        onChange={handleCheck}/>Spring
                    </label>
                    {errors.temporada && errors.temporada.length > 1 && (
                      <p>{errors.temporada}</p>
                    )}
                </div>


                <div >
                <select onChange={(e)=> handleSelect(e)}>
                <option value="">Seleciona el pais</option>
                    {countries.map((cou) => 
                    <option value={cou.name} key={cou.name} > {cou.name}</option>
                    )}
                </select>
                <div>
                <ul>
                    <li>{form.countries.map((el, index)=> 
                        <div key={index}>
                            {el}
                        <button onClick={() => handleDelete(el)}>X</button>
                        </div>)}</li>
                    </ul>
                   
                        {errors.countries && (
                        <p >{errors.countries}</p>
                    )}

                </div>


                </div>
            </div>
              <div >
              <button type="submit">
                <span>Crea nueva actividad</span>
              </button>
              </div>
              <div>
              <Link to="/home">
            <button className={styles.volver}>
             Volver
            </button>
              </Link>
              </div>
             
            </form>

            </div>

        </div>
    )
    

}
