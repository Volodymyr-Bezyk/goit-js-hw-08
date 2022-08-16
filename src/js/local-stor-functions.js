export function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log('ERROR:', error.message);
  }
}

export function readFromLocalStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log('ERROR:', error.message);
  }
}

export function removeItemFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('ERROR:', error.message);
  }
}
