import './App.css'
import ConfirmModal from './components/common/Modal/ConfirmModal'
import Router from './shared/Router'
import { RecoilRoot } from 'recoil'

function App() {
    return (
        <RecoilRoot>
            <Router />
            <ConfirmModal ></ConfirmModal>
        </RecoilRoot>
    )
}

export default App
