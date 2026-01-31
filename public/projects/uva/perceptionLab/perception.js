/**
 * @fileoverview perception.js.
 */

// create the namespace.
var perception = {};


/**
 * perception entry point for the application
 */
perception.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', perception.handlePageLoad);
