import { Button } from '../../utils/Button'
import { useCreateApiHook } from '../../api/hooks/useCreateApiHook'
import { UrlDelete } from '../../api/utils'
import { useNavigate } from 'react-router-dom'
export const RoomInfoCard = ({ roomName, _id, users }) => {
  const navigate = useNavigate()
  const { fetchData } = useCreateApiHook()
  const HandleDeleteRoom = async () => {
    await fetchData(`${UrlDelete}/${_id}`, 'DELETE')
    navigate('/')
  }
  return (
    <div>
      <h2>Nombre de la Sala:{roomName}</h2>
      <p>Id: {_id}</p>
      <p>Usuarios de la Sala:</p>
      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <Button
        titulo='Iniciar Juego'
        onClick={() => console.log('Start Game')}
      />
      <Button titulo='Cerrar Sala' onClick={HandleDeleteRoom} />
    </div>
  )
}
