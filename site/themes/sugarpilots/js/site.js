"use strict";
import Rellax from 'rellax';
import Vue from 'vue';
const rellax = new Rellax('.parallax-element');

// import all vue components
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.config.ignoredElements = ['lottie-player'];

Vue.prototype.$eventBus = new Vue();

new Vue({ // eslint-disable-line no-new
    el: '#site'
});
