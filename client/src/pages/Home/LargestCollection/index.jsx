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
    </div>
  );
}

export default LargestCollection;
