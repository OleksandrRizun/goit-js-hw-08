import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

import {saveToLS, loadFromLS} from './helpers';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

var key = "videoplayer-current-time";

player.on('timeupdate', throttle (saveCurrentTime, 1000));

var currentTime = loadFromLS ("videoplayer-current-time") ?? 0;

player.setCurrentTime(currentTime);

function saveCurrentTime (data){
    const value = data.seconds;
    saveToLS (key, value);
}