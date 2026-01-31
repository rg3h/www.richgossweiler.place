/**
 * @fileoverview blueboard.js.
 */

// create the namespace.
var blueboard = {};


/**
 * blueboard entry point for the application
 */
blueboard.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', blueboard.handlePageLoad);
