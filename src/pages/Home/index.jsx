import { confirmModalState } from '../../shared/recoil/confirmModalState'
import { useRecoilState } from 'recoil'

const Home = () => {
    const [modalOpen, setModalOpen] = useRecoilState(confirmModalState)

    const handleModal = () => {
        setModalOpen({ isOpen: true })
    }

    return (
        <div>
            <button onClick={handleModal}>준비중모달</button>
        </div>
    )
}

export default Home
