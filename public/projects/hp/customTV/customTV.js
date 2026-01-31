/**
 * @fileoverview customTV.js.
 */

// create the namespace.
var customTV = {};


/**
 * customTV entry point for the application
 */
customTV.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', customTV.handlePageLoad);
