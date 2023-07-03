const regexName = /^[A-Z][A-Za-z0-9 ]*$/;

export const validate = (name) => {
    let errors = {};
  
    
    if (!regexName.test(name.name)) {
      errors.name =
      "El nombre no puede tener caracteres especiales ni tildes y debe comenzar con una letra mayúscula";
    }
    
    /* if (Object.keys(form).length === 0) {
      errors.form = "Campos incompletos";
    } */
  
    return errors;
  };
  