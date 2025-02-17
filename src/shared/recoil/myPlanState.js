import { atom } from 'recoil';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';

export const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS');

export const myPlanState = atom({
  key: 'myPlanState', // unique ID (with respect to other atoms/selectors)
  default: {
    vision: '',
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
  },
  effects: [localStorageEffect('myPlan')],
});
