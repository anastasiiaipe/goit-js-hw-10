'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();

  const delay = Number(form.delay.value);
  const selectedState = form.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: '#FFF',
        backgroundColor: '#59A10D',
        position: 'topRight',
        icon: '',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: '#FFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
        icon: '',
      });
    });
  form.reset();
}
