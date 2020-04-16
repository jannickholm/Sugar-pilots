const mix = require('laravel-mix');
const config = require('./webpack.config');
require('laravel-mix-purgecss');

const paths = {
    js: 'resources/js',
    sass: 'resources/sass',
    publicJs: 'public/js',
    publicCss: 'public/css'
};

// eslint-disable-next-line no-unused-vars
const extractLibraries = ['vue'];

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import']
});

mix.js(`${paths.js}/site.js`, `${paths.publicJs}/site.js`).sass(
    `${paths.sass}/site.scss`,
    `${paths.publicCss}/app.css`
);

// local settings
if (!mix.inProduction()) {
    mix.sourceMaps();
}

// production settings
if (mix.inProduction()) {
    mix.version();
    mix.disableNotifications();
    mix.purgeCss();
}

mix.webpackConfig(config);
