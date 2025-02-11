import './App.css'
import OnboardingInput from './components/atoms/OnboardingInput'
import Router from './shared/Router'
import { RecoilRoot } from 'recoil'

function App() {
    return (
        <RecoilRoot>
            <Router />
            <OnboardingInput isText={false}>{"안녕하세요"}</OnboardingInput>
        </RecoilRoot>
    )
}

export default App
