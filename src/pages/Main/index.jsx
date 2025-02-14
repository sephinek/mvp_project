import Goals from '../../components/molecules/Goals';
import Plans from '../../components/molecules/Plans';
import Vision from '../../components/molecules/Vision';
import BottomNav from '../../components/common/BottomNav';
import styles from './index.module.css';
import useCallModal from '../../hooks/useCallModal';
import useNavigationPage from '../../hooks/useNavigationPage';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { myPlanState } from '../../shared/recoil/myPlanState';
import { v4 as uuid } from 'uuid';

export default function Main() {
  const { state, routePage } = useNavigationPage();
  const [myPlan, setMyPlan] = useState({
    vision: state[2],
    goals: [
      {
        id: uuid(),
        title: 'Figma 정복하기',
        color: 'green',
        startDate: new Date(),
        endDate: new Date(),
        plans: [
          {
            id: uuid(),
            title: 'Goal1의 플랜1',
            startDate: new Date(),
            endDate: new Date('2025-02-20T03:24:00'),
            completedDates: [],
            pausedDates: [],
            repetition: [], // 월 화 수 목 금 토 일 최대 7개까지
            plansCount: 12, // repetition가 수정될 때 현재 시간을 기준으로 필요한 count 개수를 계산하고 completedDates.length를 더한다.
            isPaused: false,
          },
          {
            id: uuid(),
            title: 'Goal1의 플랜2',
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
      {
        id: uuid(),
        title: '외주받기',
        color: 'green',
        startDate: new Date(),
        endDate: new Date(),
        plans: [
          {
            id: uuid(),
            title: 'Goal2의 플랜1',
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

  const { callModal } = useCallModal();
  const handleCallModal = () => {
    callModal('타이틀', '서브타이틀', '취소 버튼', '확인 버튼', () => {
      console.log('확인 버튼 눌렸습니다.');
    });
  };

  return (
    <>
      {myPlan && (
        <div>
          <Vision myVision={myPlan.vision} />
          <Goals goals={myPlan.goals} />
          <Plans goals={myPlan.goals} />
          <BottomNav />
          <button onClick={handleCallModal}>눌러주세요</button>
        </div>
      )}
    </>
  );
}
