/**
 * @fileoverview googleio.js.
 */

// create the namespace.
var googleio = {};


/**
 * googleio entry point for the application
 */
googleio.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', googleio.handlePageLoad);
