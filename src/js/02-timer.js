import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import onStartClick, { timerId } from './helpers/02-start-timer';
import { renderTimer } from './helpers/02-render-timer';

export let selectedDate = null;
let currentDate = null;

export const butStartRef = document.querySelector('button[data-start]');

butStartRef.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    currentDate = new Date();

    if (selectedDate.getTime() < currentDate.getTime()) {
      butStartRef.setAttribute('disabled', true);
      Notify.failure('Really???? Choose the date in the future!');
      return;
    }

    butStartRef.removeAttribute('disabled');
    renderTimer(selectedDate, currentDate);
    clearInterval(timerId);
  },
};

flatpickr('#datetime-picker', options);

butStartRef.addEventListener('click', onStartClick);