import './App.css';
import ConfirmModal from './components/common/Modal/ConfirmModal';
import AppRouter from './shared/AppRouter';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <AppRouter />
      <ConfirmModal></ConfirmModal>
    </RecoilRoot>
  );
}

export default App;
