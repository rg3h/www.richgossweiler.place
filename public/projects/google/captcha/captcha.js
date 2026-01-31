/**
 * @fileoverview captcha.js.
 */

// create the namespace.
var captcha = {};


/**
 * captcha entry point for the application
 */
captcha.handlePageLoad = function() {
  base.initTitle();
  base.periodicallyGetDate(); // changes format if the width is too small
  rcg.Dom.fadeUpCurrentPage();
};

window.addEventListener('load', captcha.handlePageLoad);
