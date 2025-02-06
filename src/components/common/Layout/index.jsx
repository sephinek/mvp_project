import { Outlet } from 'react-router-dom'
import ConfirmModal from '../Modal/ConfirmModal'
import styles from './index.module.css'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Outlet />
            <ConfirmModal />
        </div>
    )
}

export default Layout
