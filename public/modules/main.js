// @fileoverview modules/main.js
window.addEventListener('load', main);
window.addEventListener('unload', function(){}); // break cached back button

import {updateDateOnTheMinute} from './date.js';
import {changeTopOnScroll} from './scroll.js';

// main entry point for the app
async function main() {
  let dateEle = document.getElementsByClassName('date')[0];
  dateEle ? updateDateOnTheMinute(dateEle) : null;

  let showEle = document.getElementsByClassName('topBar')[0];
  let scrollEle = document.getElementsByClassName('page')[0];
  showEle && scrollEle ? changeTopOnScroll(showEle, scrollEle) : null;

  setUpSummaryDetails('Education');
  setUpSummaryDetails('Work');
  setUpSummaryDetails('Publications');
  setUpSummaryDetails('Patents');

} // main()


// add callbacks so we can expand and contract all details for a named class
function setUpSummaryDetails(className) {
  let b = document.getElementById('expandAll' + className);
  if (!b) { return }

  b.textContent = 'expand all';
  b.isOpen = false;
  b.addEventListener('click', () => {
    b.isOpen = !b.isOpen;
    let detailsClassName = className.toLowerCase() + 'Details';
    let eleList = document.getElementsByClassName(detailsClassName)

    if (b.isOpen) {
      b.textContent = 'collapse all';
      for (let i = 0; i < eleList.length; ++i) {
        eleList[i].setAttribute('open', '');
        let summary = eleList[i].getElementsByTagName('summary');
        summary.length > 0 ? summary[0].classList.add('noWrap') : null;
      }
    } else {
      b.textContent = 'expand all';
      for (let i = 0; i < eleList.length; ++i) {
        eleList[i].removeAttribute('open', '');
        let summary = eleList[i].getElementsByTagName('summary');
        summary.length > 0 ? summary[0].classList.remove('noWrap') : null;
      }
    }
  });
}
