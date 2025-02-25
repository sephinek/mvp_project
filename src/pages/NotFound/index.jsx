import Button from '../../components/atoms/Button';
import styles from './index.module.css';

export default function NotFound() {
  return (
    <section className={styles.container}>
      <span>Oops, Error occurred!😥</span>
      <Button to='/main'>홈으로 돌아가기</Button>
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
