/*
	Source:
	van Creij, Maurice (2018). "crossfade.js: Cross-fades between several different backgrounds.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Crossfade = function (config) {

	// PROPERTIES

	this.config = {
		'index': -1
	};

	// METHODS

	this.init = function (config) {
		// store the config
		for (var property in config) { this.config[property] = config[property]; }
		// set off the first transition
		this.config.interval = setInterval(this.showNext.bind(this), this.config.delay);
		// return the object
		return this;
	};

	this.showNext = function () {
		// increment the index
		this.config.index = (this.config.index + 1) % this.config.elements.length;
		// for every element on the stack
		var elements = this.config.elements;
		for (var a = 0, b = elements.length; a < b; a += 1) {
			// reorder the element in the stack
			elements[a].className = elements[a].className.split(' crossfade-buffer-')[0] + ' crossfade-buffer-' + (elements.length - (a + this.config.index) % elements.length);
		}
	};

	// EVENTS

	this.init(config);

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = Crossfade;
}
