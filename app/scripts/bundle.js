(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  console.log('Hello ' + _main2.default.owner);
  console.log(_main2.default.isTouchDevice() ? 'Touch Device' : 'Desktop');

  $('#copyright').append(_main2.default.printCopyright());
});

},{"./main.js":2}],2:[function(require,module,exports){
'use strict';

var mainObj = {
  owner: 'Developer',
  copyright: new Date().getFullYear(),
  isTouchDevice: function isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  printCopyright: function printCopyright() {
    return '&copy; ' + this.copyright + ' ' + this.owner + '. All Rights Reserved.';
  }
};

module.exports = mainObj;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsRUFBRSxZQUFXO0FBQ1gsVUFBUSxHQUFSLFlBQXFCLGVBQVEsS0FBN0I7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFRLGFBQVIsS0FBMEIsY0FBMUIsR0FBMEMsU0FBdEQ7O0FBRUEsSUFBRSxZQUFGLEVBQWdCLE1BQWhCLENBQXVCLGVBQVEsY0FBUixFQUF2QjtBQUVELENBTkQ7Ozs7O0FDRkEsSUFBSSxVQUFVO0FBQ1osU0FBTyxXQURLO0FBRVosYUFBVyxJQUFJLElBQUosR0FBVyxXQUFYLEVBRkM7QUFHWixlQUhZLDJCQUdJO0FBQ2QsV0FBTyxDQUFDLEVBQUUsa0JBQWtCLE1BQXBCLENBQUQsSUFBZ0MsQ0FBQyxFQUFFLHNCQUFzQixPQUFPLFNBQS9CLENBQXhDO0FBQ0QsR0FMVztBQU1aLGdCQU5ZLDRCQU1LO0FBQ2YsdUJBQWlCLEtBQUssU0FBdEIsU0FBbUMsS0FBSyxLQUF4QztBQUNEO0FBUlcsQ0FBZDs7QUFXQSxPQUFPLE9BQVAsR0FBaUIsT0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IG1haW5PYmogZnJvbSAnLi9tYWluLmpzJztcblxuJChmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coYEhlbGxvICR7bWFpbk9iai5vd25lcn1gKTtcbiAgY29uc29sZS5sb2cobWFpbk9iai5pc1RvdWNoRGV2aWNlKCkgPyAnVG91Y2ggRGV2aWNlJzogJ0Rlc2t0b3AnKTtcblxuICAkKCcjY29weXJpZ2h0JykuYXBwZW5kKG1haW5PYmoucHJpbnRDb3B5cmlnaHQoKSk7XG5cbn0pO1xuIiwidmFyIG1haW5PYmogPSB7XG4gIG93bmVyOiAnRGV2ZWxvcGVyJyxcbiAgY29weXJpZ2h0OiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gIGlzVG91Y2hEZXZpY2UoKSB7XG4gICAgcmV0dXJuICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgISEoJ21zbWF4dG91Y2hwb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IpO1xuICB9LFxuICBwcmludENvcHlyaWdodCgpIHtcbiAgICByZXR1cm4gYCZjb3B5OyAke3RoaXMuY29weXJpZ2h0fSAke3RoaXMub3duZXJ9LiBBbGwgUmlnaHRzIFJlc2VydmVkLmBcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluT2JqO1xuIl19