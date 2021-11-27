import addLeadingZero from './02-addZero';
import convertMs from './02-convertMs';

const timeRef = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

export function renderTimer(selectedDate, currentDate) {
  const { days, hours, minutes, seconds } = convertMs(selectedDate - currentDate);
  timeRef.days.textContent = addLeadingZero(days);
  timeRef.hours.textContent = addLeadingZero(hours);
  timeRef.minutes.textContent = addLeadingZero(minutes);
  timeRef.seconds.textContent = addLeadingZero(seconds);
  return timeRef;
}