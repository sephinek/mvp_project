import Goals from '../../components/molecules/Goals';
import Plans from '../../components/molecules/Plans';
import Vision from '../../components/molecules/Vision';
import BottomNav from '../../components/common/BottomNav';
import useNavigationPage from '../../hooks/useNavigationPage';
import { useEffect, useState } from 'react';

export default function Main() {
  const { state, routePage } = useNavigationPage();
  const [myPlan, setMyPlan] = useState({
    vision: state[2],
    goals: [
      {
        title: 'Figma 정복하기',
        color: 'green',
        startDate: new Date(),
        endDate: new Date(),
        plans: [
          {
            title: '플랜 타이틀',
            startDate: new Date(),
            endDate: new Date('2025-02-20T03:24:00'),
            completedDates: [],
            pausedDates: [],
            repetition: [], // 월 화 수 목 금 토 일 최대 7개까지
            plansCount: 12, // repetition가 수정될 때 현재 시간을 기준으로 필요한 count 개수를 계산하고 completedDates.length를 더한다.
            isPaused: false,
          },
        ],
      },
    ],
  });

  return (
    <>
      {myPlan && (
        <div>
          <Vision myVision={myPlan.vision} />
          <Goals goals={myPlan.goals} />
          <Plans goals={myPlan.goals} />
          <BottomNav />
        </div>
      )}
    </>
  );
}
