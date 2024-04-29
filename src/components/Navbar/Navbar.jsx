import { useState } from 'react'
import Button from '../../utils/Button'
import { MaterialSymbolsClose, MaterialSymbolsDehaze } from '../../assets/icons'
import { Image } from '../../utils/image'
import style from '../../sass/navbar.module.sass'

function Navbar() {
  const [menu, setMenu] = useState(false)
  const ChangeMobile = () => {
    setMenu(!menu)
  }
  return (
    <nav className={style.Navbar}>
      <Image
        src='./src/assets/image/logo.webp'
        alt='logo quiz'
        className={style.Navbar__Logo}
      />
      <a onClick={() => ChangeMobile()} className={style.IconMenuMobile}>
        {menu ? (
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
      <div className={menu ? style.Navbar__Items__Open : style.Navbar__Items}>
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
