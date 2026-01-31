// @fileoverview modules/date.js -- automatically updates the date every minute

export {updateDateOnTheMinute};

/*export*/ function updateDateOnTheMinute(dateContainerEle) {
  if (!dateContainerEle) {
    return
  }

  dateContainerEle.innerHTML = getFormattedDate();

  // compute the time remaining until the next update
  let secondsLeft = 60 - new Date().getSeconds(); // secs until the next minute
  let ms = Math.max(0, secondsLeft * 1000);
  setTimeout(() => {updateDateOnTheMinute(dateContainerEle)}, ms);
}


/*private*/ const monthNameList = [
  'January','February','March','April','May','June','July',
  'August','September','October','November','December'
];


/*private*/ const dayNameList = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];


/*private*/ function getFormattedDate() {
  const now = new Date();
  const DDDD = dayNameList[now.getDay()];
  const DD = now.getDate();
  const MMMM = monthNameList[now.getMonth()];
  const YYYY = now.getFullYear();

  let HH = now.getHours();

  const AMPM = HH > 11 ? 'pm' : 'am';
  HH = HH > 12 ? HH - 12 : HH;
  let NN = now.getMinutes();
  NN = NN < 10 ? '0' + NN : NN;

  return [DDDD + ',', DD, MMMM, YYYY].join(' ');
}
