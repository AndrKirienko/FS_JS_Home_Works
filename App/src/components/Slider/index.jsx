import './Slider.module.sass'
import { slides } from './ImagesForSlider'

function Slider() {
  return (
    <div>
      <img src={slides[3].src} alt="" />
    </div>
  )
}

export default Slider
