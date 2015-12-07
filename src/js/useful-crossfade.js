/*
	Source:
	van Creij, Maurice (2014). "useful.aspectratio.js: Keeps the proportions of a box the same regardless of browser size.", version 20141127, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// create the constructor if needed
var useful = useful || {};

// extend the constructor
useful.Crossfade = function () {

	// PROPERTIES

	"use strict";

	this.config = {
		'index' : -1
	};

	// METHODS

	this.init = function (config) {
		// store the config
		for (var property in config) { this.config[property] = config[property]; }
		// set off the first transition
		this.config.interval = setInterval(this.onShowNext(), this.config.delay);
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

	this.onShowNext = function () {
		// establish a permanent context
		var _this = this;
		// return an event handler
		return function () {
			_this.showNext();
		};
	};

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = useful.Crossfade;
}