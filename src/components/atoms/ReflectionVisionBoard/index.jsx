import Masonry from 'react-responsive-masonry';
import styles from './index.module.css';

const ReflectionVisionBoard = ({ images }) => {
  if(!Array.isArray(images) || images.length === 0) {
    return (
      <div className={styles.wrap}>
          <ul className={styles.reflectionVisionBoard}>
              <li className={styles.visionBoardContent}></li>
              <li className={styles.visionBoardContent}></li>
              <li className={styles.visionBoardContent}></li>
          </ul>
          <ul className={styles.reflectionVisionBoardd}>
              <li className={styles.visionBoardContent}></li>
              <li className={styles.visionBoardContent}></li>
              <li className={styles.visionBoardContent}></li>
          </ul>
      </div>
    );
  }

  return <div className={styles.container}>
    <Masonry
        columnsCount={2}
        gutter={"10px"}
    >
      {images.map(url => <div key={url} className={styles.item}><img src={url} /></div>)}
    </Masonry>
  </div>
};

export default ReflectionVisionBoard;

