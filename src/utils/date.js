import { format } from 'date-fns';

export const getDate = (date) => {
  return format(date, 'yyyy-MM-dd HH:mm:ss');
};
