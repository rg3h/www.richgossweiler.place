/**
 * @fileoverview quickSuggest.js.
 */

// create the namespace.
var quickSuggest = {};


/**
 * quickSuggest entry point for the application
 */
quickSuggest.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', quickSuggest.handlePageLoad);
