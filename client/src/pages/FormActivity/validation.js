const regexName = /^[A-Z][A-Za-z0-9 ]*$/;

export const validation = (form) => {
    let errors = {};
  
    if (!form.names) {
      errors.names = "El nombre es obligatorio";
    }
    if (!regexName.test(form.names)) {
      errors.names =
      "El nombre no puede tener caracteres especiales ni tildes y debe comenzar con una letra mayúscula";
    }
    if (form.names.length < 3) {
      errors.names = "El nombre no puede tener menos de 3 caracteres";
    }
    if (form.names.length > 30) {
      errors.names = "El nombre no puede tener más de 30 caracteres";
    }
    if (!form.difficulty || form.difficulty === " ") {
      errors.difficulty = "El campo de dificultad es obligatorio";
    }
    if (form.difficulty > 5 || form.difficulty < 1) {
      errors.difficulty = "Solo se aceptan valores del 1 al 5";
    }
    if (form.difficulty === "Select a difficulty") {
      errors.difficulty = "No válido";
    }
    if (!form.duration || form.duration === " ") {
      errors.duration = "El campo de duración es obligatorio";
    }
    if (form.duration > 24 || form.duration < 1) {
      errors.duration = "Solo se aceptan valores del 1 al 24";
    }
    if (!form.temporada || form.temporada.length === 0) {
      errors.temporada = "Seleccionar al menos una temporada";
    }
    if (form.temporada.length > 2) {
      errors.temporada = "Seleccionar un máximo de dos temporadas";
    }
    if (!form.countries || form.countries.length === 0) {
      errors.countries = "Elegir un pais";
    }
    if (form.countries.length > 10) {
      errors.countries = "Puede seleccionar hasta 10 países";
    }
    if (Object.keys(form).length === 0) {
      errors.form = "Campos incompletos";
    }
  
    return errors;
  };
  