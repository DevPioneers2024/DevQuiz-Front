import { useState } from 'react'
import style from '../../sass/navbar.module.sass'
import { Button } from '../../utils/Button'
import { MaterialSymbolsClose, MaterialSymbolsDehaze } from '../../assets/icons'
import { Image } from '../../utils/image'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className={style.Navbar}>
      <Image
        src='./src/assets/image/logo.webp'
        alt='logo quiz'
        className={style.Navbar__Logo}
      />
      <a onClick={() => toggleMenu()} className={style.IconMenuMobile}>
        {menuOpen ? (
          <Image
            src={MaterialSymbolsClose}
            className={style.IconMenuMobile__Icon}
          />
        ) : (
          <Image
            src={MaterialSymbolsDehaze}
            className={style.IconMenuMobile__Icon}
          />
        )}
      </a>
      <div
        className={menuOpen ? style.Navbar__Items__Open : style.Navbar__Items}
      >
      <Link to={"/Gameroom"}>
        <Button
            titulo='Jugar'
            className={style.Navbar__Items__Open__Click}
        />
      </Link>
        
        <Button
          titulo='Iniciar Sesión'
          className={style.Navbar__Items__Open__Click}
        />
        <Button
          titulo='Registrarse'
          className={style.Navbar__Items__Open__Click}
        />
      </div>
    </nav>
  )
}

export default Navbar
