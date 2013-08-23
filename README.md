##Description
<b>draf</b> is a safe way to play `requestAnimationFrame` and `cancelAnimationFrame`. Might be used to build animation library, or just to build simple gallery.
<br>This script also provides better replacement for setTimeout, clearTimeout, setInterval, and clearInterval. They are `requestTimeout, clearRequestTimeout, requestInterval` and `clearRequestInterval`


Originally by Erik Möller http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating<br>
<b>and</b> my litle script was heavily inspired by :
<br>Paul Irish writing on https://gist.github.com/paulirish/1579671
<br>Nicolas Gryman project on https://github.com/ngryman/raf.js
<br>Klemen Slavič 'fixing' on https://gist.github.com/KrofDrakula/5318048
<br>Joe Lambert 'replacement' on https://gist.github.com/joelambert/1002116


##Benefits
Benefits of using requestAnimationFrame
- Browser can optimize it, so your animation would be smoother
- Animation/interval/timeout in inactive tab will stop, it means less CPU, GPU, and memory usage
- Also means battery friendly


##Download
<a href="https://raw.github.com/drizzlecloudy/araf/master/draf.js" target="_blank">Click this</a>


##Usage
Just use this like in pure requestAnimationFrame & cancelAnimationFrame :
- `requestAnimationFrame`
- `cancelAnimationFrame`
<br>If you want read more about how to use pure requestAnimationFrame, here is excellent articles :
<br>http://css-tricks.com/using-requestanimationframe/
<br>http://creativejs.com/resources/requestanimationframe/
<br>https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame
<br>http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
<br>http://www.nczonline.net/blog/2011/05/03/better-javascript-animations-with-requestanimationframe/


<br>
Also providing the drop-in replacement for `setTimeout, clearTimeout, setInterval, clearInterval`. This will use the `requestAnimationFrame` when possible for better performance. Just use this replacement like their pure way :
- `requestTimeout`
- `clearRequestTimeout`
- `requestInterval`
- `clearRequestInterval`


##License
Public License


##Note
Feel free to contact me on twitter if you find issue/ bug in this script<br>
<sup><a href="https://twitter.com/drizzlecloudy">@drizzlecloudy </a><b>or</b> drizzlecloudy {at} gmail.com</sup>
