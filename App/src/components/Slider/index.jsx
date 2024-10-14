import { Component } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import styles from './Slider.module.sass'
import { slides } from './ImagesForSlider'

class Slider extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 currentSlideIndex: 0
		}
	}
  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // const nextSlide = () => {
  //   setCurrentSlideIndex(index => (index === slides.length - 1 ? 0 : index + 1))
  // }

  // const prevSlide = () => {
  //   setCurrentSlideIndex(index => (index === 0 ? slides.length - 1 : index - 1))
  // }

  render() {
    return
    ;<section className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <button className={styles.prevBtn} onClick={prevSlide}>
          <GrPrevious />
        </button>
        <img
          key={slides.id}
          className={styles.slideImg}
          src={slides[currentSlideIndex].src}
          alt=""
        />
        <button className={styles.nextBtn} onClick={nextSlide}>
          <GrNext />
        </button>
      </div>
    </section>
  }
}

export default Slider
