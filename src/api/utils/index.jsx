export const UrlCreate = 'http://localhost:3000/api/v1/room/create'
export const UrlJoin = 'http://localhost:3000/api/v1/room/join'
export const UrlList = 'http://localhost:3000/api/v1/room/list'
export const UrlDelete = 'http://localhost:3000/api/v1/room/delete'

export const fetchDataAndNavigate = async (
  fetchData,
  url,
  method,
  requestData,
  navigate
) => {
  try {
    const joinData = await fetchData(url, method, requestData)
    if (joinData) {
      const roomId = joinData.response._id
      navigate(`/room/${roomId}`, { state: { joinData } })
      return joinData
    } else {
      console.error('Error al unirse a la sala')
      return null
    }
  } catch {
    console.error('Error al unirse a la sala')
    return null
  }
}
