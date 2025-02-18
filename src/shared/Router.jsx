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

import Statistics from '../pages/Statistics';
import GoalDetails from '../pages/GoalDetails';
import EditGoal from '../pages/EditGoal';

import PublishedButton from '../pages/published/button';
import PublishedRadio from '../pages/published/radio';
import PublishedOnboardingCheck from '../pages/published/onboarding-check';
import PublishedHomeQuickButtons from '../pages/published/home-quick-buttons';
import PublishedHomePlanBottomSheet from '../pages/published/home-plan-bottom-sheet';
import AddGoal from '../pages/AddGoal';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<OnBoarding />} />
          <Route path='/home' element={<Home />} />
          <Route path='/main' element={<Main />} />
          <Route path='/goal/:goalId' element={<GoalDetails />} />
          <Route path='/goal/add' element={<AddGoal />} />
          <Route path='/goal/edit/:goalId' element={<EditGoal />} />

          <Route path='/reflection' element={<Reflection />}>
            <Route path='vision-board' element={<VisionBoard />} />
            <Route path='review' element={<Review />} />
            <Route path='guide' element={<Guide />} />
            <Route path='plans-review' element={<PlansReview />} />
          </Route>
          <Route path='/statistics' element={<Statistics />} />

          <Route path='/published/button' element={<PublishedButton />} />
          <Route path='/published/radio' element={<PublishedRadio />} />
          <Route
            path='/published/onboarding-check'
            element={<PublishedOnboardingCheck />}
          />
          <Route
            path='/published/home-quick-buttons'
            element={<PublishedHomeQuickButtons />}
          />
          <Route
            path='/published/home-plan-bottom-sheet'
            element={<PublishedHomePlanBottomSheet />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
