import { useState } from 'react'
import Slider from 'react-slick'
import SliderCb from './SliderCb'
import { SliderConfSlink } from './SliderConfSlink'
import { slider_image } from '../../utils/dummy'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderUI = () => {
  const [slider] = useState(slider_image)

  return <Slider {...SliderConfSlink}>{slider.map(SliderCb)}</Slider>
}

export default SliderUI
