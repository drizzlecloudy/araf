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
		var currTime = new Date.now();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	}

	function polyfillCancel(id) {
		clearTimeout(id);
	}

	this.requestAnimationFrame	= (!blacklisted && nativeRequest != null) ? nativeRequest : polyfillRequest;
	this.cancelAnimationFrame	= (!blacklisted && nativeCancel  != null) ? nativeCancel  : polyfillCancel;

})();
