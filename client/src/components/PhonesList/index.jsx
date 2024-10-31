import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './PhonesList.module.sass'

function PhoneList() {
  const initialResults = 5

  const [phones, setPhones] = useState([])
  const [page, setPage] = useState(1)
  const [results, setResults] = useState(initialResults)

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  const handleAddMore = () => {
    setResults(results + initialResults)
  }

  useEffect(() => {
    fetch(`http://localhost:5000/api/phones?page=${page}&results=${results}`)
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
            {p.model}
          </li>
        ))}
      </ul>
      <div className={styles.addMore}>
        <button
          className={styles.btn}
          onClick={handleAddMore}
        >
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

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(PhoneList)
