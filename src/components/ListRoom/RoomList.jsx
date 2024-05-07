import { RoomCard } from '../CardHall/RoomCard'
import { fetchDataAndNavigate, UrlJoin } from '../../api/utils'
import { useCreateApiHook } from '../../api/hooks/useCreateApiHook'
export const RoomList = ({ rooms }) =>
  rooms.map(room => (
    <RoomCard
      key={room.id}
      item={room}
      fetchDataAndNavigate={fetchDataAndNavigate}
      url={UrlJoin}
      method='POST'
      useApiHooks={useCreateApiHook}
    />
  ))
