import classNames from 'classnames';
import styles from './index.module.css'; // CSS 모듈로 임포트

const Radio = ({
  id,
  name,
  value,
  color = 'orange',
  selectedColor,
  ...rest
}) => {
  return (
    <div {...rest}>
      <input
        type='radio'
        name={name}
        id={id}
        value={value}
        className={styles.input} // 실제 radio input은 숨김
        defaultChecked={selectedColor === value? 'true': undefined}
      />
      <label className={styles.label} htmlFor={id}>
        <span
          className={classNames({
            [styles.fruit]: true,
            [styles[color]]: true,
          })}
        ></span>
      </label>
    </div>
  );
};

export default Radio;
