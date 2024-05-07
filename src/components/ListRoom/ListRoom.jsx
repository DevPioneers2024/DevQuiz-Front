import { useEffect, useState } from 'react'
import { RoomList } from './RoomList'
import { Error } from '../../utils/Error'

export const ListRoom = ({ useApiHook, url, method }) => {
  const { responseData, fetchData } = useApiHook()
  const { error, response } = responseData
  const [latestRooms, setLatestRooms] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData(url, method)
    }, 3000)
    return () => clearInterval(interval)
  }, [fetchData, url, method])
  useEffect(() => {
    if (response) {
      setLatestRooms(response.slice(-5).reverse())
    }
  }, [response])

  return (
    <div>
      {error && <Error message='Error al cargar la lista de salas' />}
      {<RoomList rooms={latestRooms} />}
    </div>
  )
}
