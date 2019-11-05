# crossfade.js: Cross-fading backgrounds

Cross-fades between several different backgrounds.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-crossfade">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/crossfade.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/crossfade.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/crossfade.js'
], function(Crossfade) {
	...
});
```

Or import into an MVC framework.

```js
var Crossfade = require('js/crossfade.js');
```


## How to start the script

```html
<figure class="crossfade">
	<div class="crossfade-buffer" style="background-image: url(./img/crossfade-a.jpg);"></div>
	<div class="crossfade-buffer" style="background-image: url(./img/crossfade-b.jpg);"></div>
	<div class="crossfade-buffer" style="background-image: url(./img/crossfade-c.jpg);"></div>
	<figcaption class="crossfade-overlay">
		<h1>Lorem ipsum</h1>
		<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<a href="#">Sed do eiusmod</a>
	</figcaption>
</figure>
```


**style** - The backgrounds may also be defined in the stylesheet.

```javascript
var crossfade = new Crossfade({
	'delay': 4000,
	'elements': document.querySelectorAll('.crossfade-buffer')
});
```

**delay : {string}** - Time between cross fades.

**elements : {integer}** - The background layers that are the target of the script.

## How to control the script

### Update

```javascript
crossfade.showNext();
```

Manually fade to the next background.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
