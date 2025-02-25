import { Outlet } from 'react-router-dom';
import ConfirmModal from '../Modal/ConfirmModal';
import AddModals from '../Modal/AddModals';
import styles from './index.module.css';

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
