/**
 * @fileoverview tvListings.js.
 */

// create the namespace.
var tvListings = {};


/**
 * tvListings entry point for the application
 */
tvListings.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', tvListings.handlePageLoad);
