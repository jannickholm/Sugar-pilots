"use strict";
import Rellax from 'rellax';
import Vue from 'vue';
import Vuex from 'vuex';
import VueInstagram from 'vue-instagram-feed';
import Scrollbar from 'smooth-scrollbar';
import AOS from 'aos';
Vue.use(Vuex);
Vue.use(VueInstagram);
require("./navigation");
require("./webshop");
require("./scroll_animation");
AOS.init({
    once: false,
    mirror: false,
    offset: 100,
    disable: function() {
        var maxWidth = 769;
        return window.innerWidth < maxWidth;
      }
});

Scrollbar.initAll({

    // Momentum reduction damping factor, a float value between (0, 1)
    damping: .1,
  
    // Minimal size for scrollbar thumb.
    thumbMinSize: 20,
  
    // Render scrolling by integer pixels
    renderByPixels: true,
  
    // Whether allow upper scrollable content to continue scrolling when current scrollbar reaches edge. 
    // When set to 'auto', it will be enabled on nested scrollbars, and disabled on first-class scrollbars.
    continuousScrolling: true,
  
    // Keep scrollbar tracks always visible.
    alwaysShowTracks: false,
  
    // Element to be used as a listener for mouse wheel scroll events. 
    // By default, the container element is used.
    wheelEventTarget: null,
  
    // plugins
    plugins: {}
    
  });



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

if (window.innerWidth < 769) {
    rellax.destroy();
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 769) {
        rellax.destroy();
    } else {
        let rellax = new Rellax('.parallax-element');
    }
})

