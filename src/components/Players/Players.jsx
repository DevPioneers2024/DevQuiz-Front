import style from '../../sass/Gameroom.module.sass'

const Players = () => {
  return (
    <>
      <div className={style.userplayer}>
        <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className={style.userplayer__info}>
          <span>Jugador 2</span>
        </div>
      </div>
      <div className={style.userplayer}>
        <img src="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className={style.userplayer__info}>
          <span>Jugador 3</span>
        </div>
      </div>
      <div className={style.userplayer}>
        <img src="https://images.pexels.com/photos/803766/pexels-photo-803766.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className={style.userplayer__info}>
          <span>Jugador 4</span>
        </div>
      </div>
    </>
  )
}

export default Players