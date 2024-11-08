import { useState } from 'react';
import classNames from 'classnames';
import CONSTANTS from '../../../constants';
import cardContents from './cardContents.json';
import styles from './LargestCollection.module.sass';

const { CATEGORIES, INDUSTRIES, IDEAS } = CONSTANTS.TABS;

function LargestCollection() {
  const [toggleState, setToggleState] = useState(CATEGORIES);

  const toggleTab = (value) => {
    setToggleState(value);
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
          className={buttonTabs(CATEGORIES)}
          onClick={() => toggleTab(CATEGORIES)}
        >
          Top Categories
        </button>
        <button
          className={buttonTabs(INDUSTRIES)}
          onClick={() => toggleTab(INDUSTRIES)}
        >
          Top Industries
        </button>
        <button className={buttonTabs(IDEAS)} onClick={() => toggleTab(IDEAS)}>
          Top Ideas
        </button>
      </div>
      <div className={styles.contentTabContainer}>
        <div className={contentTab(CATEGORIES)}>
          {cardContents.cards.map((cards) => (
            <div style={{ backgroundColor: cards.backgroundColor }}>
              <img key={cards.id} src={cards.url} />
              <p>{cards.body}</p>
            </div>
          ))}
        </div>
        <div className={contentTab(INDUSTRIES)}>2</div>
        <div className={contentTab(IDEAS)}>3</div>
      </div>
    </div>
  );
}

export default LargestCollection;
