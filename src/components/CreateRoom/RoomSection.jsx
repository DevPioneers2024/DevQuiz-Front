import { useState } from 'react'
import CreateRoomForm from './CreateRoomForm'
import { Button } from '../../utils/Button'
import { useNavigate } from 'react-router-dom'
import { useRoomService } from '../../hooks/useRoomServices'

const RoomSection = () => {
  const roomService = useRoomService()
  const navigate = useNavigate()
  const [seeForm, setSeeForm] = useState(false)

  const HandleCreateRoom = async (roomNameValue, userNameValue) => {
    const roomData = await roomService.createRoom(roomNameValue, userNameValue)
    if (roomData) {
      console.log('Sala Creada', roomData)
      const roomId = roomData._id
      navigate(`/room/${roomId}`)
    } else {
      console.error('Error al crear la sala')
    }
  }
  return (
    <>
      <Button titulo='crear sala' onClick={() => setSeeForm(true)} />
      {seeForm && <CreateRoomForm HandleCreateRoom={HandleCreateRoom} />}
    </>
  )
}

export default RoomSection
