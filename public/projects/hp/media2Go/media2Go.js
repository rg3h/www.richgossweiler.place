/**
 * @fileoverview media2go.js.
 */

// create the namespace.
var media2go = {};


/**
 * media2go entry point for the application
 */
media2go.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', media2go.handlePageLoad);
