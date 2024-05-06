import { useEffect } from 'react'
import { useCreateApiHook } from '../../api/hooks/useCreateApiHook'
import { UrlList } from '../../api/utils'
import { Card } from '../CardHall/Card'
import style from '../../sass/Card.module.sass'
import { JoinRoomButton } from '../JoinRoom/JoinRoomButton'
export const ListRoom = () => {
  const { responseData, fetchData } = useCreateApiHook()
  const { error, response } = responseData
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData(UrlList, 'GET')
    }, 3000)
    return () => clearInterval(interval)
  }, [fetchData])
  // console.log(response, 'response')
  const handleJoinRoom = roomId => {
    // Lógica para unirse a la sala con el ID proporcionado
    console.log('Unirse a la sala con ID:', roomId)
    return roomId
  }

  return (
    <div>
      {error && <div>error...</div>}
      {response &&
        response.map(item => (
          <div key={item.id} className={style.cardContainer}>
            <Card
              titulo={item.name}
              cantidad={item.userCount}
              usuario={item.id}
              style={style.cardContainer}
            />
            <JoinRoomButton roomId={item.id} onJoinRoom={handleJoinRoom} />
          </div>
        ))}
    </div>
  )
}
