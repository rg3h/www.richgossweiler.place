/**
 * @fileoverview penguin.js.
 */

// create the namespace.
var penguin = {};


/**
 * penguin entry point for the application
 */
penguin.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', penguin.handlePageLoad);
