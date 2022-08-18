import throttle from 'lodash.throttle';
import {
  saveToLocalStorage,
  readFromLocalStorage,
  removeItemFromLocalStorage,
} from './local-stor-functions';

const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const userData = readFromLocalStorage(LOCAL_STORAGE_KEY) || {};

formRef.addEventListener('input', throttle(onFormRefChange, 500));
formRef.addEventListener('submit', onFormRefSubmit);

if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
  setValuesToInputs(formRef, userData);
}

function onFormRefChange(e) {
  userData[e.target.name] = e.target.value;
  saveToLocalStorage(LOCAL_STORAGE_KEY, userData);
}

function onFormRefSubmit(e) {
  e.preventDefault();
  console.log(
    readFromLocalStorage(LOCAL_STORAGE_KEY) || 'No information in Local Storage'
  );
  e.currentTarget.reset();
  removeItemFromLocalStorage(LOCAL_STORAGE_KEY);
}

function setValuesToInputs(form, data) {
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}
