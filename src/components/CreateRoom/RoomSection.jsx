import { useState } from 'react'
import { CreateRoomForm } from './CreateRoomForm'
import { Button } from '../../utils/Button'
import { useNavigate } from 'react-router-dom'

export const RoomSection = ({
  useApiHook,
  url,
  method,
  fetchDataAndNavigate
}) => {
  const { fetchData } = useApiHook()
  const navigate = useNavigate()
  const [showCreateRoom, setShowCreateRoom] = useState(false)
  const HandleCreateRoom = async (roomNameValue, userNameValue) => {
    fetchDataAndNavigate(
      fetchData,
      url,
      method,
      {
        roomName: roomNameValue,
        userName: userNameValue
      },
      navigate
    )
  }
  return (
    <>
      <Button titulo='crear sala' onClick={() => setShowCreateRoom(true)} />
      {showCreateRoom && <CreateRoomForm HandleCreateRoom={HandleCreateRoom} />}
    </>
  )
}
