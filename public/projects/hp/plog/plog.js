/**
 * @fileoverview plog.js.
 */

// create the namespace.
var plog = {};


/**
 * plog entry point for the application
 */
plog.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', plog.handlePageLoad);
