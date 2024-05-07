import Navbar from '../components/Navbar/Navbar'
import { Intruction } from '../components/instruction/Intruction'
import SliderUI from '../components/Slider/SliderUI'
import { RoomSection } from '../components/CreateRoom/RoomSection'
import { ListRoom } from '../components/ListRoom/ListRoom'
import { useCreateApiHook } from '../api/hooks/useCreateApiHook'
import { UrlList, UrlCreate, fetchDataAndNavigate } from '../api/utils'

const Home = () => {
  return (
    <>
      <Navbar />
      <SliderUI />
      <Intruction />
      <RoomSection
        useApiHook={useCreateApiHook}
        url={UrlCreate}
        method={'POST'}
        fetchDataAndNavigate={fetchDataAndNavigate}
      />
      <ListRoom useApiHook={useCreateApiHook} url={UrlList} method='GET' />
    </>
  )
}

export { Home }
