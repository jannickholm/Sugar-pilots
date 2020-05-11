const mix = require('laravel-mix');
var sassVars = './scssVars.json';

mix.js('site/themes/sugarpilots/js/site.js', 'site/themes/sugarpilots/js/sugarpilots.js')
    .sass('site/themes/sugarpilots/sass/sugarpilots.scss', 'site/themes/sugarpilots/css', {
        prependData: '$assets:\'' + process.env.MIX_ASSETS + '\';'
    });