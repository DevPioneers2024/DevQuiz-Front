import Navbar from '../components/Navbar/Navbar'
import { Intruction } from '../components/instruction/Intruction'
import SliderUI from '../components/Slider/SliderUI'
import { RoomSection } from '../components/CreateRoom/RoomSection'
import { ListRoom } from '../components/ListRoom/ListRoom'

const Home = () => {
  return (
    <>
      <Navbar />
      <SliderUI />
      <Intruction />
      <RoomSection />
      <ListRoom />
    </>
  )
}

export { Home }
