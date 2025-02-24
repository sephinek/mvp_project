import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

const ReflectionTopBar = ({ children, ...rest }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.topBar} {...rest}>
      <div className={styles.iconLeft} onClick={() => navigate('/main')}></div>
      <h1 className={styles.title}>{children}</h1>
      <div className={styles.iconRight}></div>
    </div>
  );
};

export default ReflectionTopBar;
