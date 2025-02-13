import Goals from '../../components/molecules/Goals';
import Plans from '../../components/molecules/Plans';
import Vision from '../../components/molecules/Vision';
import BottomNav from '../../components/common/BottomNav';
import styles from './index.module.css';
import useNavigationPage from '../../hooks/useNavigationPage';
import { useEffect, useState } from 'react';

export default function Main() {
  const [myPlan, setMyPlan] = useState({
    vision: '',
    goals: [
      {
        title: '',
        color: '',
        startDate: new Date(),
        endDate: new Date(),
        plans: [],
      },
    ],
  });
  const { state, routePage } = useNavigationPage();

  useEffect(() => {
    if (!state) {
      routePage('/');
    } else {
      setMyPlan({ ...myPlan, vision: state[2] });
    }
  }, []);

  return (
    <div>
      <Vision myVision={myPlan.vision} />
      <Goals />
      <Plans />
      <BottomNav />
    </div>
  );
}
