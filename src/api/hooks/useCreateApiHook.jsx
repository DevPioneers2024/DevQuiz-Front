import { useState } from 'react'
export const useCreateApiHook = () => {
  const [loading, setLoading] = useState(false)
  const [responseData, setResponseData] = useState({})
  console.log(responseData.response, 'responseData')
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
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  return { loading, responseData, fetchData }
}
