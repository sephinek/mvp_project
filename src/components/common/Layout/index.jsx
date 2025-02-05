import { Outlet } from 'react-router-dom'
import ConfirmModal from '../Modal/ConfirmModal'

const Layout = () => {
    return (
        <>
            <Outlet />
            <ConfirmModal />
        </>
    )
}

export default Layout
