import styles from './LargestCollection.module.sass';

function LargestCollection() {
  return (
    <div className={styles.collectionContainer}>
      <h3 className={styles.collectionTitle}>
        Largest Collection of Brandable Names
      </h3>
      <p className={styles.collectionSubTitle}>
        Explore themed brand name collections created by our experienced team of
        branding experts
      </p>
      <div className={styles.buttonsTabContainer}>
        <button className={`${styles.buttonTab} ${styles.buttonTabActive}`}>
          Top Categories
        </button>
        <button className={styles.buttonsTab}>Top Industries</button>
        <button className={styles.buttonsTab}>Top Ideas</button>
			</div>
			<div className={styles.contentTabContainer}>
				<div className={styles.contentTab}>1</div>
				<div className={styles.contentTab}>2</div>
				<div className={styles.contentTab}>3</div>
			</div>
    </div>
  );
}

export default LargestCollection;
