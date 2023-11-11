import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

import {saveToLS, loadFromLS} from './helpers';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle (saveCurrentTime, 1000));

var currentTime = loadFromLS ("videoplayer-current-time");

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


function saveCurrentTime (data){
    const key = "videoplayer-current-time";
    const value = data.seconds;
    saveToLS (key, value);
}