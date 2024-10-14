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
        prevState.currentSlideIndex === slides.length - 1
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

  render() {
    const { currentSlideIndex } = this.state
    const currentSlide = slides[currentSlideIndex]

    return (
      <section className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <button className={styles.prevBtn} onClick={this.prevSlide}>
            <GrPrevious />
          </button>
          <img
            key={slides.id}
            className={styles.slideImg}
            src={currentSlide.src}
            alt={currentSlide.alt || 'Slide image'}
          />
          <button className={styles.nextBtn} onClick={this.nextSlide}>
            <GrNext />
          </button>
        </div>
      </section>
    )
  }
}

export default Slider
