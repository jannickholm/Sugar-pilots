const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('site/themes/sugarpilots/js/site.js', 'sugarpilots/js/sugarpilots.js')
    .sass('site/themes/sugarpilots/sass/sugarpilots.scss', 'site/themes/sugarpilots/css');