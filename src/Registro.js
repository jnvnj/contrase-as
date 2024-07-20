import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


function Registro() {

    useEffect(() => {
        const forms = document.querySelectorAll('.needs-validation');
    
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
    
            form.classList.add('was-validated');
          }, false);
        });
      }, []);

    return (
        <div className='registro template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>

            <form className='needs-validation' noValidate>
                <h3 className='text-center'>Registrarse</h3>

                <div className='mb-2'>
                    <label htmlFor="fname">Nombre</label>
                    <input type="text" placeholder='Ingresa Tu Nombre' className='form-control' minLength='3' required/>
                    <div className="valid-feedback">
                        Nombre Valido
                    </div>
                    <div className="invalid-feedback">
                        Nombre Invalido
                    </div>
                </div>

                <div className='mb-2'>
                    <label htmlFor="lname">Apellido</label>
                    <input type="text" placeholder='Ingresa Tus Apellidos' className='form-control' minLength='3' required/>
                    <div className="valid-feedback">
                        Apellido Valido
                    </div>
                    <div className="invalid-feedback">
                        Apellido Invalido
                    </div>
                </div>

                <div className='mb-2'>
                    <label htmlFor="email">Correo</label>
                    <input type="email" placeholder='Ingresa Tu Correo' className='form-control' minLength='3' required/>
                    <div className="valid-feedback">
                        Correo Valido
                    </div>
                    <div className="invalid-feedback">
                        Correo Invalido
                    </div>
                </div>

                <div className='mb-2'>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" placeholder='Ingresa Tu Contraseña' className='form-control' minLength='8' required/>
                    <div className="valid-feedback">
                        Contraseña Valido
                    </div>
                    <div className="invalid-feedback">
                        Contraseña Invalido
                    </div>
                </div>
            
                <div className='d-grid mt-2'>
                    <button className='btn btn-primary'>Registrarse</button>
                </div>
                <p className='text-end mt-2'>
                    ¿Ya estas registrado?<Link to="/" className='ms-2'>Inicia Sesion</Link>
                </p>
            </form>
        </div>
    </div>
    )
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

export default Registro