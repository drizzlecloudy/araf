#araf
Another 'play-safe' requestAnimationFrame<br>
This should work also for iOS 6,7


Originally by Erik Möller http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating<br>
and my litle project was heavily inspired by :

- Paul Irish writing on https://gist.github.com/paulirish/1579671
- Nicolas Gryman project on https://github.com/ngryman/raf.js
- Klemen Slavič 'fixing' on https://gist.github.com/KrofDrakula/5318048
- Joe Lambert 'replacement' on https://gist.github.com/joelambert/1002116


##Usage
Just use this like in pure requestAnimationFrame & cancelAnimationFrame :
- `requestAnimationFrame`
- `cancelAnimationFrame`
<br>If you want read more about how to use pure requestAnimationFrame, here is very good article :
<br>http://css-tricks.com/using-requestanimationframe/
<br>http://creativejs.com/resources/requestanimationframe/
<br>https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame
<br>http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


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
<sub>@drizzlecloudy</sub> or <sub>drizzlecloudy {at} gmail.com</sub>
