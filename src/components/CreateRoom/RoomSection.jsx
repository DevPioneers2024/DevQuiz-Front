import { useState } from 'react'
// import Card from '../CardHall/Card'
import CreateRoomForm from './CreateRoomForm'
import { useCreateApiHook } from '../../api/hooks/useCreateApiHook'
import { Button } from '../../utils/Button'
import { useNavigate } from 'react-router-dom'
import { UrlCreate } from '../../api/utils'

const RoomSection = () => {
  const { fetchData } = useCreateApiHook()
  const navigate = useNavigate()
  const [seeForm, setSeeForm] = useState(false)

  const HandleCreateRoom = async (roomNameValue, userNameValue) => {
    fetchData(UrlCreate, 'POST', {
      roomName: roomNameValue,
      userName: userNameValue
    })
    navigate('/crear-sala')
  }

  return (
    <>
      <Button titulo='crear sala' onClick={() => setSeeForm(true)} />
      {seeForm && <CreateRoomForm HandleCreateRoom={HandleCreateRoom} />}
    </>
  )
}

export default RoomSection
