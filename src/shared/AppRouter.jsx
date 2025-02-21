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
import Guide from '../pages/Guide';
import Statistics from '../pages/Statistics';

import PublishedButton from '../pages/published/button';
import PublishedRadio from '../pages/published/radio';
import PublishedOnboardingCheck from '../pages/published/onboarding-check';
import PublishedHomeQuickButtons from '../pages/published/home-quick-buttons';
import PublishedHomePlanBottomSheet from '../pages/published/home-plan-bottom-sheet';

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
          <Route
            path='/'
            element={
              <DissolvePage>
                <OnBoarding />
              </DissolvePage>
            }
          />
          <Route
            path='/home'
            element={
              <DissolvePage>
                <Home />
              </DissolvePage>
            }
          />
          <Route
            path='/main'
            element={
              <AnimatePage>
                <Main />
              </AnimatePage>
            }
          />
          <Route
            path='/goal/:goalId'
            element={
              <AnimatePage>
                <GoalDetails />
              </AnimatePage>
            }
          />
          <Route
            path='/goal/add'
            element={
              <AnimatePage>
                <AddGoal />
              </AnimatePage>
            }
          />
          <Route
            path='/plan/add'
            element={
              <AnimatePage>
                <AddPlan />
              </AnimatePage>
            }
          />
          <Route
            path='/goal/edit/:goalId'
            element={
              <AnimatePage>
                <EditGoal />
              </AnimatePage>
            }
          />
          <Route
            path='/plan/edit/:planId'
            element={
              <AnimatePage>
                <EditPlan />
              </AnimatePage>
            }
          />

          <Route
            path='/reflection'
            element={
              <AnimatePage>
                <Reflection />
              </AnimatePage>
            }
          >
            <Route
              path='vision-board'
              element={
                <AnimatePage>
                  <VisionBoard />
                </AnimatePage>
              }
            />
            <Route
              path='review'
              element={
                <AnimatePage>
                  <Review />
                </AnimatePage>
              }
            />
            <Route
              path='guide'
              element={
                <AnimatePage>
                  <Guide />
                </AnimatePage>
              }
            />
            <Route
              path='plans-review'
              element={
                <AnimatePage>
                  <PlansReview />
                </AnimatePage>
              }
            />
          </Route>
          <Route
            path='/statistics'
            element={
              <AnimatePage>
                <Statistics />
              </AnimatePage>
            }
          />

          <Route
            path='/mypage'
            element={
              <AnimatePage>
                <MyPage />
              </AnimatePage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function DissolvePage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function AnimatePage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
