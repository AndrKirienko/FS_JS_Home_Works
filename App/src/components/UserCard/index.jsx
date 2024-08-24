import styles from './UserCard.module.sass'

function UserCard({ user: { name, email } }) {
  return (
		<article className={styles.userCard}>
			<h2 className={styles.userName}>{name}</h2>
			<div className={styles.userEmail}>{email}</div>
    </article>
  )
}

export default UserCard
