import style from '../../sass/Gameroom.module.sass'
import Imagen from '../../../../../capturas/Rocky.png'
const Navtitle = () => {
  return (
    <div className={style.navtitle}>
        <img src={Imagen} alt="" />
        <span className={style.navtitle__logo}>Rocky</span>
    </div>
  )
}

export default Navtitle