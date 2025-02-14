import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/common/Layout';
import OnBoarding from '../pages/OnBoarding';
import Main from '../pages/Main';
import PublishedButton from "../pages/published/button/index"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<OnBoarding />} />
          <Route path='/home' element={<Home />} />
          <Route path='/main' element={<Main />} />
          <Route path="/published/button" element={<PublishedButton/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
