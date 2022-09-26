<<<<<<< Updated upstream
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

const STORAGE_KEY = 'videoplayer-current-time';
const CurrentTime = localStorage.getItem(STORAGE_KEY);

const onPlay = function (data) {
  const timeupdate = data.seconds;
  console.log(timeupdate);
  localStorage.setItem(STORAGE_KEY, timeupdate);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(CurrentTime)
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
=======
// import vimeoPlayer from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

const time = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(time || 0.1)
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
>>>>>>> Stashed changes
        break;
    }
  });
