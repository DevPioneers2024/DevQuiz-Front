import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { RoomInfoCard } from '../components/CardHall/RoomInfoCard'
import { UrlDelete } from '../api/utils'
import { useCreateApiHook } from '../api/hooks/useCreateApiHook'
const WaitRooms = () => {
  const [joinData, setJoinData] = useState(null)
  const location = useLocation()
  useEffect(() => {
    if (location.state && location.state.joinData) {
      setJoinData(location.state.joinData)
    }
  }, [location.state])
  return (
    <div>
      {joinData && (
        <RoomInfoCard
          {...joinData.response}
          url={UrlDelete}
          method={'DELETE'}
          useApiHook={useCreateApiHook}
        />
      )}
    </div>
  )
}
export { WaitRooms }
