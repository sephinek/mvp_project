import { atom } from 'recoil';
export const addModalState = atom({
  key: 'addModalState', // unique ID (with respect to other atoms/selectors)
  default: {
    isOpen: false,
    title: '목표 추가',
    subTitle: '새로운 목표와 계획을 추가하고 싶어요',
    icon: 'icon',
    callback: () => {},
  }, // default value (aka initial value)
});
