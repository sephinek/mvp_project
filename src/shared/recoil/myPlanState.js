import { atom } from 'recoil';
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

export const myPlanState = atom({
  key: 'myPlanState', // unique ID (with respect to other atoms/selectors)
  default: {
    vision: '',
    goals: [
      {
        id: uuid(),
        title: '창의적 활동 지속하기',
        color: 'green',
        startDate: new Date(),
        endDate: new Date(),
        plans: [
          {
            id: uuid(),
            title: '매주 한 번 창의적인 활동하기',
            startDate: new Date(),
            endDate: new Date('2025-01-01T03:24:00'),
            completedDates: [],
            pausedDates: [],
            repetition: [], // 월 화 수 목 금 토 일 최대 7개까지
            plansCount: 12, // repetition가 수정될 때 현재 시간을 기준으로 필요한 count 개수를 계산하고 completedDates.length를 더한다.
            isPaused: false,
          },
          {
            id: uuid(),
            title: '매달 한 번 드로잉 커뮤니티 참석하기',
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
        title: '재정적 자유 달성',
        color: 'green',
        startDate: new Date(),
        endDate: new Date(),
        plans: [
          {
            id: uuid(),
            title: '매일 가계부 쓰기',
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
        title: '건강한 생활 습관 유지',
        color: 'green',
        startDate: new Date(),
        endDate: new Date(),
        plans: [
          {
            id: uuid(),
            title: '매일 가계부 쓰기',
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
