import { useState } from 'react'
import { CreateRoomForm } from './CreateRoomForm'
import { useCreateApiHook } from '../../api/hooks/useCreateApiHook'
import { Button } from '../../utils/Button'
import { fetchDataAndNavigate, UrlCreate } from '../../api/utils'
import { useNavigate } from 'react-router-dom'

export const RoomSection = () => {
  const { fetchData } = useCreateApiHook()
  const navigate = useNavigate()
  const [showCreateRoom, setShowCreateRoom] = useState(false)
  const HandleCreateRoom = async (roomNameValue, userNameValue) => {
    fetchDataAndNavigate(
      fetchData,
      UrlCreate,
      'POST',
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
