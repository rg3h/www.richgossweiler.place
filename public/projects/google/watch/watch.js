/**
 * @fileoverview watch.js.
 */

// create the namespace.
var watch = {};


/**
 * watch entry point for the application
 */
watch.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', watch.handlePageLoad);
