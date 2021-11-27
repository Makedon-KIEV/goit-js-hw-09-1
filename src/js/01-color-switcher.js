import { onStartClick, onStopClick } from './helpers/01-button-start-stop';

export const refs = {
  bodyRef: document.querySelector('body'),
  butStartRef: document.querySelector('button[data-start]'),
  butStopRef: document.querySelector('button[data-stop]'),
};

refs.butStartRef.addEventListener('click', onStartClick);
refs.butStopRef.addEventListener('click', onStopClick);

refs.butStopRef.setAttribute('disabled', true);