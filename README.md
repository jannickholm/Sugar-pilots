<p align="center">
<img src="https://github.com/jannickholm/Sugar-pilots/blob/develop/SugarPilots_logo-300x253.png" align="center" width="400" alt="Project logo">
</p>

# Sugar Pilots 2020

## Environments
* `master` - Used for production, it should be the most stable branch. Merges commits from hotfix, develop and release branches.
* `develop` -  Used for staging, default branch, contains latest features and fixes

## Getting started

### Prerequisites
* PHP >= 7.1.3
* [Composer](https://getcomposer.org/)
* [Node.js (For npm)](https://nodejs.org/dist/v12.16.2/node-v12.16.2.pkg)
* [Laravel valet](https://laravel.com/docs/7.x/valet)

### Setting up project
Here's a brief intro about what a developer must do in order to start developing
the project further:


#### Before cloning the repo make sure you have Laravel Valet, Composer and node.js installed. Follow these steps for laravel valet:

* Install PHP 7.4 using Homebrew via brew install php.
* Install or update Homebrew to the latest version using brew update.
* Install Valet with Composer via composer global require laravel/valet. Make sure the ~/.composer/vendor/bin directory is in your system's "PATH".
* Run the valet install command. This will configure and install Valet and DnsMasq, and register Valet's daemon to launch when your system starts.


```shell
$ # Clone the project
$ git clone https://github.com/jannickholm/Sugar-pilots.git

$ # go into the project folder
$ cd Sugar-pilots/

$ # Install npm dependencies
$ npm install

$ # Build/Compile assets
$ npm run dev
```

## Project Guidelines
Please adhere as much as possible to the guidelines
