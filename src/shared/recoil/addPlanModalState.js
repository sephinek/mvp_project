import { atom } from 'recoil';
export const addPlanModalState = atom({
  key: 'addPlanModalState', // unique ID (with respect to other atoms/selectors)
  default: {
    isOpen: false,
    title: '계획 추가',
    subTitle: '기존 목표에 계획만 추가하고 싶어요',
    icon: 'icon',
    callback: () => {},
  }, // default value (aka initial value)
});
