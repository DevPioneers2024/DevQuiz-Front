import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { RoomInfoCard } from '../components/CardHall/RoomInfoCard'
const WaitRooms = () => {
  const [joinData, setJoinData] = useState(null)
  const location = useLocation()
  useEffect(() => {
    if (location.state && location.state.joinData) {
      setJoinData(location.state.joinData)
    }
  }, [location.state])
  return <div>{joinData && <RoomInfoCard {...joinData.response} />}</div>
}

export { WaitRooms } 
