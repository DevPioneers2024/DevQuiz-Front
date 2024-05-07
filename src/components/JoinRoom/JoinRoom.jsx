import { Input } from '../../utils/Input'
import { Button } from '../../utils/Button'
export const JoinRoom = ({ HandleJoinRoom, roomId }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const roomIdValue = roomId
    const userNameValue = e.target.userNameInput.value
    HandleJoinRoom(userNameValue, roomIdValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input type='text' name='roomIdInput' placeholder={roomId} readOnly />
      <Input type='text' name='userNameInput' placeholder='userName' />
      <Button titulo='Crear' type='submit' />
    </form>
  )
}
