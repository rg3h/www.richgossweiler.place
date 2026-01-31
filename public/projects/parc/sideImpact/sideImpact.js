/**
 * @fileoverview sideImpact.js.
 */

// create the namespace.
var sideImpact = {};


/**
 * sideImpact entry point for the application
 */
sideImpact.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', sideImpact.handlePageLoad);
