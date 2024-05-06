import { Button } from '../../utils/Button'
export const RoomInfoCard = ({ roomName, _id, users }) => {
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
      <Button titulo='Cerrar Sala' onClick={() => console.log('Close Room')} />
    </div>
  )
}
