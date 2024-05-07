import { Button } from '../../utils/Button'
import { useNavigate } from 'react-router-dom'
import { UserList } from '../../utils/UserList'
export const RoomInfoCard = ({
  roomName,
  _id,
  users,
  url,
  method,
  useApiHook
}) => {
  const navigate = useNavigate()
  const { fetchData } = useApiHook()
  const HandleDeleteRoom = async () => {
    await fetchData(`${url}/${_id}`, method)
    navigate('/')
  }
  return (
    <div>
      <h2>Nombre de la Sala:{roomName}</h2>
      <p>Id: {_id}</p>
      <p>Usuarios de la Sala:</p>
      <UserList users={users} />
      <Button
        titulo='Iniciar Juego'
        onClick={() => console.log('Start Game')}
      />
      <Button titulo='Cerrar Sala' onClick={HandleDeleteRoom} />
    </div>
  )
}
