import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './PhonesList.module.sass'
import { getPhonesThunk } from '../../store/slices/phonesSlice'
import CONSTANTS from './../../../constants'

const {
  PAGINATION: { INITIAL_PAGE, INITIAL_RESULTS },
} = CONSTANTS

function PhoneList({ getPhones }) {
  const [phones, setPhones] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [results, setResults] = useState(INITIAL_RESULTS)

  console.log(phones.length)
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (phones.length > 1) {
      setPage(page + 1)
    }
  }

  const handleAddMore = () => {
    setResults(results + INITIAL_RESULTS)
  }

  // useEffect(() => {
  // 	console.log(CONSTANTS)
  //   getPhones()
  // }, [])

  useEffect(() => {
    fetch(`${CONSTANTS.BASE_URL}/phones?page=${page}&results=${results}`)
      .then(response => response.json())
      .then(({ data }) => {
        setPhones(data)
      })
      .catch(err => console.log(err))
  }, [page, results])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.listWrapper}>
        {phones.map(p => (
          <li key={p.id} className={styles.phoneListItem}>
            <div className={styles.connectItemWrapper}>
              <div className={styles.connectItem}>
                <h3>
                  {p.model} {p.brand}
                </h3>
              </div>
              <button className={styles.btn}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.addMore}>
        <button className={styles.btn} onClick={handleAddMore}>
          Показати ще...
        </button>
      </div>
      <div className={styles.pageList}>
        <button className={styles.btn} onClick={handlePrev}>
          prev
        </button>
        <span>{page}</span>
        <button className={styles.btn} onClick={handleNext}>
          next
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ phonesData }) => phonesData

const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhonesThunk()),
})
export default connect(mapStateToProps, mapDispatchToProps)(PhoneList)
