/**
 * @fileoverview gulliver.js.
 */

// create the namespace.
var gulliver = {};


/**
 * gulliver entry point for the application
 */
gulliver.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', gulliver.handlePageLoad);
