// require("./lib/pym");
var Rellax = require('rellax');

var rellax = new Rellax('.rellax', {
  // center: true
  callback: function (position) {
    // callback every position change
    console.log(position);
  },
  breakpoints: [576, 768, 1024]
});

var ScrollTrigger = require('@terwanerik/scrolltrigger');
// Create a new ScrollTrigger instance with default options
const trigger = new ScrollTrigger.default();

console.log(trigger);