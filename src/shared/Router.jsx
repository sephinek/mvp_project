import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/common/Layout';
import OnBoarding from '../pages/OnBoarding';
import Main from '../pages/Main';

import Reflection from '../pages/Reflection';
import VisionBoard from '../pages/VisionBoard';
import Review from '../pages/Review';
import Guide from '../pages/Guide';
import PlansReview from '../pages/PlansReview';
import GoalDetails from '../pages/GoalDetails';

import PublishedButton from "../pages/published/button"
import PublishedRadio from "../pages/published/radio"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<OnBoarding />} />
          <Route path='/home' element={<Home />} />
          <Route path='/main' element={<Main />} />

          <Route path='/goal-details' element={<GoalDetails />} />
          <Route path='/reflection' element={<Reflection />}>
            <Route path='vision-board' element={<VisionBoard />} />
            <Route path='review' element={<Review />} />
            <Route path='guide' element={<Guide />} />
            <Route path='plans-review' element={<PlansReview />} />
          </Route>

          <Route path="/published/button" element={<PublishedButton/>} />
          <Route path="/published/radio" element={<PublishedRadio/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
