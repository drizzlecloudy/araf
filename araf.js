/*! Originally by Erik Möller http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 *  and my little project was heavily inspired by:
 *
 *  Paul Irish writing on https://gist.github.com/paulirish/1579671
 *  Nicolas Gryman project on https://github.com/ngryman/raf.js
 *  Klemen Slavič 'fixing' on https://gist.github.com/KrofDrakula/5318048
 *  Joe Lambert 'replacement' on https://gist.github.com/joelambert/1002116
 */

// this should be 'play-safe' in ios too
(function() {

	var blacklisted   = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent),
		lastTime      = 0,
		nativeRequest = window.requestAnimationFrame || null,
		nativeCancel  = window.cancelAnimationFrame  || null;

	['webkit', 'moz'].forEach(function(prefix) {
		nativeRequest = nativeRequest || window[prefix+'RequestAnimationFrame'] || null;
		nativeCancel  = nativeCancel  || window[prefix+'CancelAnimationFrame']  || window[prefix+'CancelRequestAnimationFrame'] || null;
	});

	function polyfillRequest(callback, element) {
		var currTime = Date.now();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	}

	function polyfillCancel(id) {
		clearTimeout(id);
	}

	window.requestAnimationFrame = (!blacklisted && nativeRequest != null) ? nativeRequest : polyfillRequest;
	window.cancelAnimationFrame  = (!blacklisted && nativeCancel  != null) ? nativeCancel  : polyfillCancel;
	
	// drop in replacement for setTimeout
	// behaves the same as setTimeout, except uses requestAnimationFrame when possible for better performance
	window.requestTimeout = function(fn, delay) {
		if(blacklisted === true || nativeRequest == null)
			return window.setTimeout(fn, delay);
				
		var start  = Date.now(),
			handle = {};

		function loop(){
			var current	= Date.now(),
				delta	= current - start;
				
			delta >= delay ? fn.call() : handle.value = requestAnimationFrame(loop);
		};
		
		handle.value = requestAnimationFrame(loop);
		return handle;
	};
	
	// drop in replacement for clearTimeout
	// behaves the same as clearTimeout, except uses requestAnimationFrame when possible for better performance
	window.clearRequestTimeout = function(handle) {
		(!blacklisted && nativeCancel != null) ? window.cancelAnimationFrame(handle.value) : clearTimeout(handle);
	};

})();
