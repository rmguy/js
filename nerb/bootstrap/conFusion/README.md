# Setup Notes

Setup notes for Restaurant website

```
$ npm run build && npm start
```
or
```
$ grunt build && grunt
```

## Reconstruction package.json

* Install [nodejs](nodejs.org)
```
$ node -v
v9.9.0
$ npm -v
5.6.0
$ npm start
```
* `packages.json` uses parallelshell with [this fix](https://github.com/darkguy2008/parallelshell/issues/69)

* Install devDependencies
```
$ npm install lite-server@2.3.0 --save
```
* Jquery and bootstrap
```
$ npm install bootstrap@4.0.0 --save
$ npm install jquery@3.3.1 popper.js@1.12.9 --save
```
* Fonts and social icons
```
$ npm install font-awesome@4.7.0 --save
$ npm install bootstrap-social@5.1.1 --save
```
* Scss
    - `npm run scss`
```
$ npm install --save-dev node-sass@4.7.2
```
* Parallelshell and onchange (optional)
```
$ npm install --save-dev onchange@3.3.0 parallelshell@3.0.2
```

### Building the distribution (node)

* Cleaning out folders
```
$ npm install --save-dev rimraf@2.6.2
```
* Copying fonts
```
$ sudo npm -g install copyfiles@2.0.0
$ npm copyfonts
$ ls dist/fonts/
FontAwesome.otf          fontawesome-webfont.svg  fontawesome-webfont.woff
fontawesome-webfont.eot  fontawesome-webfont.ttf  fontawesome-webfont.woff2
$ npm clean
$ ls dist
no such folder
```
* Image minification
```
$ sudo npm install -g imagemin-cli@3.0.0 --unsafe-perm=true --allow-root

```
* Concat all js/css files in a single folder for faster downloads
```
$ npm install --save-dev usemin-cli@0.5.1 cssmin@0.4.3 uglifyjs@2.4.11 htmlmin@0.0.7
```
    - This needs
```
<!-- build:css css/main.css -->
<!-- endbuild -->
```
* Build
```
$ npm run build
```

### Building the distribution (grunt)

* Grunt
```
$ sudo npm install -g grunt-cli@1.2.0
$ npm install --save-dev grunt@1.0.2
$ npm install --save-dev grunt-sass@2.1.0
$ npm install --save-dev time-grunt@1.4.0 jit-grunt@0.10.0
```
* Grunt watch/browser sync
```
$ npm install --save-dev grunt-contrib-watch@1.0.0
$ npm install --save-dev grunt-browser-sync@2.2.0
```
* Copying/cleaning
```
$ npm install --save-dev grunt-contrib-copy@1.0.0 grunt-contrib-clean@1.1.0
```
* Image minification
```
npm install --save-dev grunt-contrib-imagemin@2.0.1
```
* css minification and js uglification
```
$ npm install grunt-contrib-concat@1.0.1 --save-dev
$ npm install grunt-contrib-cssmin@2.2.1 --save-dev
$ npm install grunt-contrib-htmlmin@2.4.0 --save-dev
$ npm install grunt-contrib-uglify@3.3.0 --save-dev
$ npm install grunt-filerev@2.3.1 --save-dev
$ npm install grunt-usemin@3.1.1 --save-dev
```
    - filerev is used to tell the browser to invalidate the cache

```
$ grunt build
```

### Building the distribution (gulp)



## Bootstrap notes

* `div class="container"` flows with screensize
* gutter width between columns = 30px
* Small (>=576px)
* `align-item-center` useful because row is sized to largest column
* `offset-`'s units are column widths

## Taskrunners

* Grunt: `grunt` and it executes the default task
