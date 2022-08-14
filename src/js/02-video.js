import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const player = new Player('vimeo-player');

/*
Підключення плеєра як вказано в ДЗ

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
*/

const LOCALE_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  const currentTime = e.seconds;
  const storageCurrentTime = localStorage.setItem(
    LOCALE_STORAGE_KEY,
    currentTime
  );
  console.log('CURRENT TIME:', Math.round(currentTime));
}

player.setCurrentTime(localStorage.getItem(LOCALE_STORAGE_KEY));
