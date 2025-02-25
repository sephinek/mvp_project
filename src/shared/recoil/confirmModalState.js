import { atom } from 'recoil';

export const initState = {
  isOpen: false,
  title : '',
  subTitle : '',
  cancleButtonName : '취소',
  confirmButtonName : '확인',
  callback : () => {} ,
  handleClickCancelButton : undefined,
  handleClickConfirmButton : undefined,
}

export const confirmModalState = atom({
  key: 'confirmModalState', // unique ID (with respect to other atoms/selectors)
  default: initState, // default value (aka initial value)
});
