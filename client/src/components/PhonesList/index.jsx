import { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './PhonesList.module.sass'
import {
  getPhonesThunk,
  removePhoneThunk,
  handleNext,
  handlePrev,
  handleShowMore,
} from '../../store/slices/phonesSlice'

export const PhoneList = ({
  phones,
  page,
  results,
  getPhones,
  removePhone,
  handleNext,
  handlePrev,
  handleShowMore,
}) => {
  useEffect(() => {
    getPhones(page, results)
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
              <button className={styles.btn} onClick={() => removePhone(p.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.addMore}>
        <button className={styles.btn} onClick={() => handleShowMore()}>
          Показати ще...
        </button>
      </div>
      <div className={styles.pageList}>
        <button className={styles.btn} onClick={() => handlePrev()}>
          prev
        </button>
        <span>{page}</span>
        <button className={styles.btn} onClick={() => handleNext()}>
          next
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ phonesData }) => phonesData

const mapDispatchToProps = dispatch => ({
  getPhones: (page, results) => dispatch(getPhonesThunk({ page, results })),
  removePhone: payload => dispatch(removePhoneThunk(payload)),
  handleNext: () => dispatch(handleNext()),
  handlePrev: () => dispatch(handlePrev()),
  handleShowMore: () => dispatch(handleShowMore()),
})
export default connect(mapStateToProps, mapDispatchToProps)(PhoneList)
