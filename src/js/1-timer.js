import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDateInMS = selectedDates[0].getTime();
    if (selectedDateInMS > Date.now()) {
      userSelectedDate = selectedDateInMS;
      startBtn.disabled = false;
    } else {
      iziToast.error({
        message: 'Please, choose a date in the future',
        messageColor: '#FFF',
        messageSize: '20px',
        backgroundColor: '#f54e59',
        position: 'topRight',
      });
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function startTimer() {
  startBtn.disabled = true;

  let timerTime = 0;

  const intervalId = setInterval(() => {
    timerTime = userSelectedDate - Date.now();

    if (timerTime > 0) {
      let timerTimeObject = convertMs(timerTime);

      days.textContent = addLeadingZero(timerTimeObject.days);
      hours.textContent = addLeadingZero(timerTimeObject.hours);
      minutes.textContent = addLeadingZero(timerTimeObject.minutes);
      seconds.textContent = addLeadingZero(timerTimeObject.seconds);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

startBtn.addEventListener('click', startTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
