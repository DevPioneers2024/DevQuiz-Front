import { useState } from 'react'
import { Card } from './Card'
import style from '../../sass/Card.module.sass'
import { Button } from '../../utils/Button'
import { JoinRoom } from '../JoinRoom/JoinRoom'
import { useNavigate } from 'react-router-dom'
import { useCreateApiHook } from '../../api/hooks/useCreateApiHook'
import { fetchDataAndNavigate, UrlJoin } from '../../api/utils'

export const RoomCard = ({ item }) => {
  const { fetchData } = useCreateApiHook()
  const navigate = useNavigate()
  const [showJoinRoom, setShowJoinRoom] = useState(false)
  const HandleJoinRoom = async (userNameValue, roomIdValue) => {
    fetchDataAndNavigate(
      fetchData,
      UrlJoin,
      'POST',
      {
        roomId: roomIdValue,
        userName: userNameValue
      },
      navigate
    )
  }
  return (
    <div className={style.cardContainer}>
      <Card
        titulo={item.name}
        cantidad={item.userCount}
        usuario={item.id}
        style={style.cardContainer}
      />
      <Button titulo='Join Room' onClick={() => setShowJoinRoom(true)} />
      {showJoinRoom && (
        <JoinRoom HandleJoinRoom={HandleJoinRoom} roomId={item.id} />
      )}
    </div>
  )
}
