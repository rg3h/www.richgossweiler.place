// @fileoverview modules/scroll.js -- move title into top on scroll

export {changeTopOnScroll};

/*export*/ function changeTopOnScroll(showEle, scrollEle) {
  if (!showEle || !scrollEle) {
    return -1;
  }

  showEle.style.opacity = 0;  // start with the show element hidden

  scrollEle.addEventListener('scroll', (event) => {
    handleScrollEvent(event, showEle, scrollEle);
  });

  return 1;
}

// add an inset drop shadow to the scroll element and show the showEle
/*private*/ function handleScrollEvent(event, showEle, scrollEle) {
  let scrollAmt = event.target.scrollTop;
  let opacity = scrollAmt / 300;

  showEle.style.opacity = opacity;

  // show/hide the boxShadow for the middle element
  if (opacity > 0) {
    scrollEle.classList.add('boxShadowTopInset');
  } else {
    scrollEle.classList.remove('boxShadowTopInset');
  }
}
