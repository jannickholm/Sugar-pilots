"use strict";
import Rellax from 'rellax';
import Vue from 'vue';

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
    else if (event.detail) {(delta = -event.detail / 3);}

    handle(delta);
    if (event.preventDefault) {(event.preventDefault());}
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
    var distance = 300;

    document.querySelector('html, body').animate({
        scrollTop: window.scrollTop - (distance * delta)
    }, time );
}

if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
  window.onmousewheel = document.onmousewheel = wheel;

  // import all vue components
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.config.ignoredElements = ['lottie-player'];

Vue.prototype.$eventBus = new Vue();

new Vue({ // eslint-disable-line no-new
    el: '#site'
});

let rellax = new Rellax('.parallax-element');

if(window.innerWidth < 769) {
    rellax.destroy();
}

window.addEventListener("resize", () => {
    rellax.destroy();
})