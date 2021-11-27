import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { formRef } from '../03-promises';
import createPromise from './03-create-promise';

export default function onSubmit(e) {
  e.preventDefault();

  let delay = Number(formRef.elements.delay.value);
  let step = Number(formRef.elements.step.value);
  let amount = Number(formRef.elements.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`Promise ${position} created with ${delay} ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`Promise ${position} not created with ${delay} ms`);
        }, delay);
      });

    delay += step;
  }
}