import { Button } from '../../utils/Button'
import { Input } from '../../utils/Input'
import style from '../../sass/CreateHall.module.sass'

export const CreateRoomForm = ({ HandleCreateRoom }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const roomNameValue = e.target.roomNameInput.value
    const userNameValue = e.target.userNameInput.value
    HandleCreateRoom(roomNameValue, userNameValue)
  }
  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit}>
        <Input type='text' name='roomNameInput' placeholder='Nombre de la sala' />
        <Input type='text' name='userNameInput' placeholder='Nombre de usuario' />
        <Button titulo='Crear' type='submit' />
      </form>
    </div>
  )
}
