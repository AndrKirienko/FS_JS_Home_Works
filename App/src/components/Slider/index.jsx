import { GrNext, GrPrevious } from 'react-icons/gr'
import styles from './Slider.module.sass'
import { slides } from './ImagesForSlider'

function Slider() {
  return (
    <section className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <button className={styles.prevBtn}>
          <GrPrevious />
        </button>
        <div className={styles.slide}>
          <img className={styles.slideImg} src={slides[0].src} alt="" />
        </div>
        <button className={styles.nextBtn}>
          <GrNext />
        </button>
      </div>
    </section>
  )
}

export default Slider
