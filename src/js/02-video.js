import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframe);
const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);

const onPlay = function(data) {
  const timeupdate = data.seconds;
  localStorage.setItem(LOCAL_STORAGE_KEY, timeupdate);
};

const throttleOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', throttleOnPlay);

player
  .setCurrentTime(currentTime)
  .then(function(seconds) {})
  .catch(function(error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
