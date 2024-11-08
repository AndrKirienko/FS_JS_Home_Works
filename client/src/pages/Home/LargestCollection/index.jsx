import { useState } from 'react';
import classNames from 'classnames';
import styles from './LargestCollection.module.sass';

function LargestCollection() {
  const [toggleState, setToggleState] = useState('categories');

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const contentTab = (value) => {
    return classNames({
      [styles.contentTab]: true,
      [styles.contentTabActive]: toggleState === value,
    });
  };

  const buttonTabs = (value) => {
    return classNames({
      [styles.buttonsTab]: true,
      [styles.buttonTabActive]: toggleState === value,
    });
  };
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
        <button
          className={buttonTabs('categories')}
          onClick={() => toggleTab('categories')}
        >
          Top Categories
        </button>
        <button
          className={buttonTabs('industries')}
          onClick={() => toggleTab('industries')}
        >
          Top Industries
        </button>
        <button
          className={buttonTabs('ideas')}
          onClick={() => toggleTab('ideas')}
        >
          Top Ideas
        </button>
      </div>
      <div className={styles.contentTabContainer}>
        <div className={contentTab('categories')}>1</div>
        <div className={contentTab('industries')}>2</div>
        <div className={contentTab('ideas')}>3</div>
      </div>
    </div>
  );
}

export default LargestCollection;
