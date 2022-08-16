//Зробити трай кеч, об'єкт форм дата, і підключити шаблонізацію через хбс

import throttle from 'lodash.throttle';
import {
  saveToLocalStorage,
  readFromLocalStorage,
  removeItemFromLocalStorage,
} from './local-stor-functions';

const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const isLocalStorageEmpty = localStorage.getItem(LOCAL_STORAGE_KEY) === null;
let userData = isLocalStorageEmpty
  ? {}
  : readFromLocalStorage(LOCAL_STORAGE_KEY);
console.log(userData);

formRef.addEventListener('input', throttle(onFormRefChange, 500));
formRef.addEventListener('submit', onFormRefSubmit);

if (!isLocalStorageEmpty) {
  setValuesToInputs(formRef);
}

function onFormRefChange(e) {
  userData[e.target.name] = e.target.value;
  saveToLocalStorage(LOCAL_STORAGE_KEY, userData);
}

function onFormRefSubmit(e) {
  e.preventDefault();
  console.log(
    localStorage.getItem(LOCAL_STORAGE_KEY) === null
      ? 'No information in Local Storage'
      : localStorage.getItem(LOCAL_STORAGE_KEY)
  );
  e.currentTarget.reset();
  userData = {};
  removeItemFromLocalStorage(LOCAL_STORAGE_KEY);
}

function setValuesToInputs(form) {
  form.elements['email'].value =
    userData.email === undefined ? '' : userData.email;
  form.elements['message'].value =
    userData.message === undefined ? '' : userData.message;
}
