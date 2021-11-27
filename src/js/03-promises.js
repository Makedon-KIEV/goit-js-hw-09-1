import onSubmit from './helpers/03-form-submit';

export const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmit);