# useful.crossfade.js: Cross-fading backgrounds

Cross-fades between several different backgrounds.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-crossfade">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="./css/useful-crossfade.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-crossfade.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to start the script

```html
<section class="crossfade">
	<div class="crossfade-buffer" style="background-image: url(./inc/img/crossfade-a.jpg);"></div>
	<div class="crossfade-buffer" style="background-image: url(./inc/img/crossfade-b.jpg);"></div>
	<div class="crossfade-buffer" style="background-image: url(./inc/img/crossfade-c.jpg);"></div>
	<div class="crossfade-overlay">
		<h1>Lorem ipsum</h1>
		<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<a href="#">Sed do eiusmod</a>
	</div>
</section>
```


**style** - The backgrounds may also be defined in the stylesheet.

```javascript
var crossfade = new useful.Crossfade().init({
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

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/