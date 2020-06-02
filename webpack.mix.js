const mix = require('laravel-mix');
const config = require('./webpack.config');

mix.js('site/themes/sugarpilots/js/site.js', 'site/themes/sugarpilots/js/sugarpilots.js')
    .sass('site/themes/sugarpilots/sass/sugarpilots.scss', 'site/themes/sugarpilots/css', {
        prependData: '$assets:\'' + process.env.MIX_ASSETS + '\';'
    });

mix.webpackConfig(config);