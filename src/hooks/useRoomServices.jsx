import { UrlCreate } from '../api/utils'
import { useCreateApiHook } from '../api/hooks/useCreateApiHook'
export const useRoomService = () => {
  const { fetchData } = useCreateApiHook()
  const createRoom = async (roomNameValue, userNameValue) => {
    try {
      const { response: response } = await fetchData(UrlCreate, 'POST', {
        roomName: roomNameValue,
        userName: userNameValue
      })
      return response
    } catch (error) {
      console.error('Error al crear la sala', error)
    }
  }
  return { createRoom }
}
