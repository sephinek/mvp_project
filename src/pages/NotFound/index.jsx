import Button from '../../components/atoms/Button';
import styles from './index.module.css';
import Lucid04 from '../../components/atoms/Lucid04';

export default function NotFound() {
  return (
    <section className={styles.container}>
      <div>
        <h1>Oops!</h1>
        <p>앗, 여긴 아무것도 없네요<br></br> 홈으로 돌아갈까요?</p>

      </div>
      <Lucid04/>
      <div className={styles.buttonWrap}>
        <Button to='/main'>홈으로 돌아가기</Button>
      </div>
    </section>
  );
}

// const getClassName = ({ theme, type, size }) => {
//   return styles[`${theme}-${type}-${size}`];
// };

// const Button = ({
//   children,
//   theme = 'primary',
//   type = 'default',
//   size = 'large',
//   ...rest
// }) => {
//   return (
//     <button {...rest} className={getClassName({ theme, type, size })}>
//       {children}
//     </button>
//   );
// };
