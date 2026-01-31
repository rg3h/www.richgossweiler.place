/**
 * @fileoverview argos.js.
 */

// create the namespace.
var argos = {};


/**
 * argos entry point for the application
 */
argos.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', argos.handlePageLoad);
