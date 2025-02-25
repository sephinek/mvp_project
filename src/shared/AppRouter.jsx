import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/common/Layout';

import Home from '../pages/Home';
import OnBoarding from '../pages/OnBoarding';
import Main from '../pages/Main';
import Reflection from '../pages/Reflection';
import MyPage from '../pages/MyPage';

import AddGoal from '../pages/AddGoal';
import GoalDetails from '../pages/GoalDetails';
import EditGoal from '../pages/EditGoal';
import AddPlan from '../pages/AddPlan';
import EditPlan from '../pages/EditPlan';
import PlansReview from '../pages/PlansReview';

import VisionBoard from '../pages/VisionBoard';
import Review from '../pages/Review';
import ReviewDetail from '../pages/ReviewDetail';
import Guide from '../pages/Guide';
import Statistics from '../pages/Statistics';
import GuideDetail from '../pages/GuideDetail';
import Splash from '../pages/Splash';

import { Outlet } from 'react-router-dom';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait' exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
        <Route path="/splash" element={<Splash />} />
          <Route element={<DissolvePage />}>
            <Route path='/' element={<OnBoarding />} />
            <Route path='/home' element={<Home />} />
          </Route>
          <Route element={<AnimatePage />}>
            <Route path='/main' element={<Main />} />
            <Route path='/goal/:goalId' element={<GoalDetails />} />
            <Route path='/goal/add' element={<AddGoal />} />
            <Route path='/plan/add' element={<AddPlan />} />
            <Route path='/goal/edit/:goalId' element={<EditGoal />} />
            <Route path='/plan/edit/:planId' element={<EditPlan />} />
            <Route path='/reflection' element={<Reflection />}>
              <Route index path='vision-board' element={<VisionBoard />} />
              <Route path='review' element={<Review />} />
              <Route path='review/:id' element={<ReviewDetail />} />
              <Route path='guide' element={<Guide />} />
              <Route path='guide/:id' element={<GuideDetail />} />
              <Route path='plans-review' element={<PlansReview />} />
            </Route>
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function DissolvePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Outlet />
    </motion.div>
  );
}

function AnimatePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      <Outlet />
    </motion.div>
  );
}
