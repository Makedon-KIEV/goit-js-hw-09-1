import { butStartRef, selectedDate } from '../02-timer';
import { renderTimer } from './02-render-timer';

export let timerId = null;

export default function onStartClick() {
  timerId = setInterval(() => {
    if (selectedDate <= new Date()) {
      clearInterval(timerId);
      butStartRef.setAttribute('disabled', true);
      return;
    }

    renderTimer(selectedDate, new Date().getTime());
  }, 1000);
}