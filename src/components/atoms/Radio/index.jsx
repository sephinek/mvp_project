import styles from './index.module.css'; // CSS 모듈로 임포트
import cn from 'classnames';

const Radio = ({
  id,
  name,
  color = 'orange',
}) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        className={styles.input} // 실제 radio input은 숨김
      />
      <label className={styles.label} 
        htmlFor={id}
      >
        <span
          className={cn({
            [styles.fruit]: true,
            [styles[color]]: true,
          })}
        ></span>
      </label>
    </>
  );
}

export default Radio;
