import throttle from 'lodash.throttle';

import {saveToLS, loadFromLS} from './helpers';

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle (onInput, 500));

function onInput () {
    let email = form.elements.email.value;
    let message = form.elements.message.value;
    const obj = {
        email,
        message
    };
    saveToLS ("feedback-form-state", obj)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = form.elements.email.value;
    let message = form.elements.message.value;
    const obj = {
        email,
        message
    };
    console.log (obj);
    localStorage.removeItem("feedback-form-state");
    form.reset();
});

function onLoad () {
    const fromLoadFromLS = loadFromLS("feedback-form-state") || {};
    form.elements.email.value = fromLoadFromLS.email || "";
    form.elements.message.value = fromLoadFromLS.message || "";
}
onLoad ();