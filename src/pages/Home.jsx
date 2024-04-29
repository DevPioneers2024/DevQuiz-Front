import Navbar from '../components/Navbar/Navbar'
import { Intruction } from '../components/instruction/Intruction'
import SliderUI from '../components/Slider/SliderUI'
import SeccionPartida from '../components/CardHall/SeccionPartida'

const Home = () => {
  return (
    <>
      <Navbar />
      <SliderUI />
      <Intruction />
      <SeccionPartida />
    </>
  )
}

export { Home }
