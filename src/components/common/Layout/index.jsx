import { Outlet } from 'react-router-dom';
import ConfirmModal from '../Modal/ConfirmModal';
import styles from './index.module.css';
import AddModals from '../Modal/AddModals';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
      <ConfirmModal />
      <AddModals />
    </div>
  );
};

export default Layout;
