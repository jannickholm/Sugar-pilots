"use strict";
import Rellax from 'rellax';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
require("./cursor");

  // import all vue components
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

const modules = require.context('./store', true, /\.js$/i);
const autoRegisteredModules = {};

modules.keys().map((key) => {
    autoRegisteredModules[modules(key).name] = modules(key).default;
});

const store = new Vuex.Store({
    state: {},
    mutations: {},
    getters: {},
    actions: {},
    modules: autoRegisteredModules
});

Vue.config.ignoredElements = ['lottie-player'];

Vue.prototype.$eventBus = new Vue();

new Vue({ // eslint-disable-line no-new
    store,
    el: '#site'
});


// enable rellax
let rellax = new Rellax('.parallax-element');

if(window.innerWidth < 769) {
    rellax.destroy();
}

window.addEventListener("resize", () => {
    if(window.innerWidth < 769) {
        rellax.destroy();
    } else {
        let rellax = new Rellax('.parallax-element');
    }
})


document.querySelectorAll(".expand-cursor").forEach(button => {
    button.addEventListener("mouseover", resizeCursor);
    button.addEventListener("mouseout", resetCursor);
});

function resizeCursor() {
    const cursor = document.querySelector(".cursor");
    cursor.classList = "cursor link-hover";
}

function resetCursor() {
    const cursor = document.querySelector(".cursor");
    cursor.classList = "cursor";
}