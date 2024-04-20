
import './Navbar.sass'

function Navbar() {
  return (
    
    <nav className="header">
      <div className="logo-container">
        <img src="./src/assets/image/logo.webp" alt="logo quiz" className="logo"/>
      </div>
      <div className="auth-buttons">
        <button className="login">Iniciar sesión</button>
        <button className="register">Registrarse</button>
      </div>
    </nav>
    
  )
}

export default Navbar
