import { atom } from 'recoil';
import { format } from 'date-fns';

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
        title: 'Figma 고수 되기',
        color: '',
        startDate: new Date(),
        endDate: new Date(),
        plans: [
          {
            title: '',
            startDate: format(new Date(), 'yyyy-MM-dd HH:mm:ss.SSS'),
            endDate: format(
              new Date('2025-02-20T03:24:00'),
              'yyyy-MM-dd HH:mm:ss.SSS'
            ),
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
