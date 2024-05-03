import Navbar from '../components/Navbar/Navbar'
import { Intruction } from '../components/instruction/Intruction'
import SliderUI from '../components/Slider/SliderUI'
import RoomSection from '../components/CreateRoom/RoomSection'

const Home = () => {
  return (
    <>
      <Navbar />
      <SliderUI />
      <Intruction />
      <RoomSection />
    </>
  )
}

export { Home }
