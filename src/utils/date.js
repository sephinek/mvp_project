import { format } from 'date-fns';

export const dayOptions = [
  { label: '월', value: 1},
  { label: '화', value: 2},
  { label: '수', value: 3},
  { label: '목', value: 4},
  { label: '금', value: 5},
  { label: '토', value: 6},
  { label: '일', value: 0},
];

export const getDate = (date) => {
  return format(date, 'yyyy-MM-dd');
};