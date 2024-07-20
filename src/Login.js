import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');
  const [inputToken, setInputToken] = useState('');

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

  const handleForgotPasswordClick = () => {
    setShowModal(true);
    generateToken(); // Genera un nuevo token cada vez que se abre el modal
    // Limpiar campos del modal
    setEmail('');
    setNewPassword('');
    setInputToken('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const generateToken = () => {
    const newToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setToken(newToken);
    alert(`Tu token de restablecimiento es: ${newToken}`); // Muestra el token como una alerta
  };

  const handlePasswordReset = () => {
    if (email !== loginEmail) {
      alert('El correo no coincide con el correo del inicio de sesión');
      return;
    }
    if (token !== inputToken) {
      alert('El token no coincide');
      return;
    }
    console.log('Email:', email);
    console.log('New Password:', newPassword);
    console.log('Token:', token);
    // Cerrar el modal después de procesar la solicitud
    setShowModal(false);
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form className='needs-validation' noValidate>
          <h3 className='text-center'>Inicia Sesion</h3>

          <div className='mb-2'>
            <label htmlFor="email">Correo</label>
            <input 
              type="email" 
              placeholder='Ingresa Tu Correo' 
              className='form-control' 
              required 
              value={loginEmail} 
              onChange={(e) => setLoginEmail(e.target.value)} 
            />
            <div className="valid-feedback">
              Correo Valido
            </div>
            <div className="invalid-feedback">
              Correo Invalido
            </div>
          </div>

          <div className='mb-2'>
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              placeholder='Ingresa Tu Contraseña' 
              className='form-control' 
              minLength='8' 
              required 
            />
            <div className="valid-feedback">
              Contraseña Valida
            </div>
            <div className="invalid-feedback">
              Contraseña Invalida
            </div>
          </div>

          <div className='d-grid'>
            <button className='btn btn-primary'>Iniciar Sesion</button>
          </div>

          <p className='text-end mt-2'>
            <a href='#' onClick={handleForgotPasswordClick}>¿Olvidaste Tu Contraseña?</a><Link to="/Registro" className='ms-2'>Registrarte</Link>
          </p>
        </form>
      </div>

      {showModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Restablecer Contraseña</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Ingresa Tu Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Nueva Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ingresa Tu Nueva Contraseña"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Token</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Token"
                    value={inputToken}
                    onChange={(e) => setInputToken(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePasswordReset}
                  disabled={inputToken !== token || email !== loginEmail}
                >
                  Restablecer Contraseña
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
