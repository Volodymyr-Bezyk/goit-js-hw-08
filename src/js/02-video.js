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
  // console.log(`CURRENT TIME: ${Math.round(currentTime)} sec`);
  return localStorage.getItem(LOCALE_STORAGE_KEY);
}

player
  .setCurrentTime(localStorage.getItem(LOCALE_STORAGE_KEY))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
