import { refs } from '../01-color-switcher';
import getRandomHexColor from './01-randomize-color';

let colorId = null;

export function onStartClick() {
  refs.butStopRef.removeAttribute('disabled');
  refs.butStartRef.setAttribute('disabled', true);
  colorId = setInterval(() => {
    refs.bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

export function onStopClick() {
  refs.butStartRef.removeAttribute('disabled');
  refs.butStopRef.setAttribute('disabled', true);
  clearInterval(colorId);
}