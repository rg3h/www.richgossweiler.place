/**
 * @fileoverview diver.js.
 */

// create the namespace.
var diver = {};


/**
 * diver entry point for the application
 */
diver.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', diver.handlePageLoad);
