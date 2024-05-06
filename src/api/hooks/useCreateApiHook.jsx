import { useState } from 'react'
export const useCreateApiHook = () => {
  const [loading, setLoading] = useState(false)
  const [responseData, setResponseData] = useState({})
  const fetchData = async (url, method, requestData) => {
    setLoading(true)
    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      })
      const data = await response.json()
      setResponseData(data)
      setLoading(false)
      console.log(data, 'fetchdata')
      return data
    } catch (error) {
      console.error(error)
      setLoading(false)
      return null
    } finally {
      setLoading(false)
    }
  }
  return { loading, responseData, fetchData }
}
