import { useEffect } from 'react'
import { useCreateApiHook } from '../../api/hooks/useCreateApiHook'
import { UrlList } from '../../api/utils'
import { RoomCard } from '../CardHall/RoomCard'
export const ListRoom = () => {
  const { responseData, fetchData } = useCreateApiHook()
  const { error, response } = responseData
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData(UrlList, 'GET')
    }, 3000)
    return () => clearInterval(interval)
  }, [fetchData])
  return (
    <div>
      {error && <div>error...</div>}
      {response &&
        response
          .slice()
          .reverse()
          .map(item => <RoomCard key={item.id} item={item} />)}
    </div>
  )
}
