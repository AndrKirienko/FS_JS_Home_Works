import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './PhonesList.model.sass'

function PhoneList() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/phones?page=1&results=10')
      .then(response => response.json())
      .then(({ data }) => {
        setPhones(data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <ul>
        {phones.map(p => (
          <li key={p.id} className={styles.text}>
            {p.model}
          </li>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = ({ phonesData }) => phonesData

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(PhoneList)
