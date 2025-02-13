import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/common/Layout'
import OnBoarding from '../pages/OnBoarding'
import PublishedButton from "../pages/published/button/index"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<OnBoarding />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/published/button" element={<PublishedButton/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
