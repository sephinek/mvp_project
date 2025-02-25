import Masonry from 'react-responsive-masonry';
import styles from './index.module.css';
import moto from '../../../assets/image/visionboard-01.png';
import coke from '../../../assets/image/visionboard-02.png';
import note from '../../../assets/image/visionboard-03.png';
import perfume from '../../../assets/image/visionboard-04.png';
import dosign from '../../../assets/image/visionboard-05.png';
import shoes from '../../../assets/image/visionboard-06.png';
import magazine from '../../../assets/image/visionboard-07.png';
import letter from '../../../assets/image/visionboard-08.png';

const ReflectionVisionBoard = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return (
      // <div className={styles.wrap}>
      //   <ul className={styles.reflectionVisionBoard}>
      //     <li className={styles.item}>
      //       <img src={moto} />
      //     </li>
      //     <li className={styles.item}>
      //       <img src={coke} />
      //     </li>
      //     <li className={styles.item}>
      //       <img src={note} />
      //     </li>
      //     <li className={styles.item}>
      //       <img src={perfume} />
      //     </li>
      //     <li className={styles.item}>
      //       <img src={dosign} />
      //     </li>
      //     {/* <li className={styles.visionBoardContent}></li>
      //     <li className={styles.visionBoardContent}></li>
      //     <li className={styles.visionBoardContent}></li> */}
      //   </ul>
      //   <ul className={styles.reflectionVisionBoard2}>
      //     <li className={styles.item}>
      //       <img src={shoes} />
      //     </li>
      //     <li className={styles.item}>
      //       <img src={magazine} />
      //     </li>
      //     <li className={styles.item}>
      //       <img src={letter} />
      //     </li>
      //     {/* <li className={styles.visionBoardContent}></li>
      //     <li className={styles.visionBoardContent}></li>
      //     <li className={styles.visionBoardContent}></li> */}
      //   </ul>
      // </div>
      <div className={styles.container}>
        <Masonry columnsCount={2} gutter={'10px'}>
          <div className={styles.item}>
            <img src={moto} />
          </div>
          <div className={styles.item}>
            <img src={shoes} />
          </div>
          <div className={styles.item}>
            <img src={coke} />
          </div>
          <div className={styles.item}>
            <img src={magazine} />
          </div>

          <div className={styles.item}>
            <img src={note} />
          </div>

          <div className={styles.item}></div>

          <div className={styles.item}>
            <img src={perfume} />
          </div>
          <div className={styles.item}>
            <img src={letter} />
          </div>
          <div className={styles.item}>
            <img src={dosign} />
          </div>
        </Masonry>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Masonry columnsCount={2} gutter={'10px'} display={'block'}>
        {images.map((url) => (
          <div key={url} className={styles.item}>
            <img src={url} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ReflectionVisionBoard;
