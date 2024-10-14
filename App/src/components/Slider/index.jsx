import { Component } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import styles from './Slider.module.sass'
import { slides } from './ImagesForSlider'

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSlideIndex: 0,
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
  }

  nextSlide() {
    this.setState(prevState => ({
      currentSlideIndex:
        prevState.currentSlideIndex === slider.length - 1
          ? 0
          : prevState.currentSlideIndex + 1,
    }))
  }

  prevSlide() {
    this.setState(prevState => ({
      currentSlideIndex:
        prevState.currentSlideIndex === 0
          ? slides.length - 1
          : prevState.currentSlideIndex - 1,
    }))
  }
  // const nextSlide = () => {
  //   setCurrentSlideIndex(index => (index === slides.length - 1 ? 0 : index + 1))
  // }

  // const prevSlide = () => {
  //   setCurrentSlideIndex(index => (index === 0 ? slides.length - 1 : index - 1))
  // }

	render() {
		
		
    return (
      <section className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <button className={styles.prevBtn} onClick={prevSlide}>
            <GrPrevious />
          </button>
          <img
            key={slides.id}
            className={styles.slideImg}
            src={slides[this.state.currentSlideIndex].src}
            alt=""
          />
          <button className={styles.nextBtn} onClick={nextSlide}>
            <GrNext />
          </button>
        </div>
      </section>
    )
  }
}

export default Slider
