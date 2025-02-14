import Goals from '../../components/molecules/Goals';
import Plans from '../../components/molecules/Plans';
import Vision from '../../components/molecules/Vision';
import BottomNav from '../../components/common/BottomNav';
import useNavigationPage from '../../hooks/useNavigationPage';
import { useEffect, useState } from 'react';

export default function Main() {
  const [myPlan, setMyPlan] = useState();
  const { state, routePage } = useNavigationPage();

  useEffect(() => {
    // 온보딩 페이지에서 main으로 왔을 때 초기 데이터 설정
    if (!state) {
      routePage('/');
    } else {
      const data = localStorage.getItem('myPlan');
      if (JSON.parse(data)) {
        setMyPlan(JSON.parse(data));
      } else {
        setMyPlan({
          vision: state[2],
          goals: [
            {
              title: 'Figma 정복하기',
              color: 'green',
              startDate: new Date(),
              endDate: new Date(),
              plans: [],
            },
          ],
        });
      }
    }
  }, []);

  useEffect(() => {
    if (myPlan) {
      localStorage.setItem('myPlan', JSON.stringify(myPlan));
    }
  }, [myPlan]);

  return (
    <>
      {myPlan && (
        <div>
          <Vision myVision={myPlan.vision} />
          <Goals goals={myPlan.goals} />
          <Plans />
          <BottomNav />
        </div>
      )}
    </>
  );
}
