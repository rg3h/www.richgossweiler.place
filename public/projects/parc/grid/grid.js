/**
 * @fileoverview grid.js.
 */

// create the namespace.
var grid = {};


/**
 * grid entry point for the application
 */
grid.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', grid.handlePageLoad);
