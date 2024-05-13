import style from '../../sass/Gameroom.module.sass'
const Navtitle = () => {
  return (
    <div className={style.navtitle}>
        <img src="https://images.unsplash.com/photo-1613254026301-71fd1a7fd020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxzdGFyJTIwd2Fyc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <span className={style.navtitle__logo}>Rocky</span>
    </div>
  )
}

export default Navtitle