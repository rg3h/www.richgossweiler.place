/**
 * @fileoverview merBoard.js.
 */

// create the namespace.
var merBoard = {};


/**
 * merBoard entry point for the application
 */
merBoard.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', merBoard.handlePageLoad);
