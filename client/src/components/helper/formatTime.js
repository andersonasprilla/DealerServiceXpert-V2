import { differenceInMinutes, differenceInDays } from 'date-fns';

const formatTime = (timestamp) => {
  const date = new Date(parseInt(timestamp, 10));
  const now = new Date();
  const days = differenceInDays(now, date);
  const minutes = differenceInMinutes(now, date) % 60;
  
  return `${days}d ${minutes}m`;
};

export default formatTime;
