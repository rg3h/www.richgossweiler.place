/**
 * @fileoverview sketchup.js.
 */

// create the namespace.
var sketchup = {};


/**
 * sketchup entry point for the application
 */
sketchup.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', sketchup.handlePageLoad);
