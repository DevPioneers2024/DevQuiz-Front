import { Button } from '../../utils/Button'

export const JoinRoomButton = ({ roomId, onJoinRoom }) => {
  return <Button titulo='Unirse' onClick={() => onJoinRoom(roomId)} />
}
